import express, { Application } from "express";
import cors from "cors";
import dotenvFlow from 'dotenv-flow';
import { initSentry } from './utils/sentry';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';

// Routen-Importe
import authRoutes from './routes/authRoutes';
import cardRoutes from './routes/cardRoutes';
import userRoutes from './routes/userRoutes';

// Umgebungsvariablen laden
dotenvFlow.config();

const app: Application = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8000;

// Sentry initialisieren
const sentryInstance = initSentry(app);

// Sentry Request-Handler (früh im Middleware-Stack)
if (process.env.NODE_ENV === 'production' && process.env.SENTRY_DSN) {
  app.use(sentryInstance.requestHandler());
}

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.CORS_ORIGIN || 'https://yourdomain.com' 
    : 'http://localhost:8081',
  credentials: true,
}));
app.use(express.json());

// Routen
app.use('/auth', authRoutes);
app.use('/tarot', cardRoutes);
app.use('/users', userRoutes);

// Sentry-Test-Route
app.get('/debug-sentry', (req, res) => {
  throw new Error('Test-Fehler für Sentry!');
});

// Error-Handler
if (process.env.NODE_ENV === 'production' && process.env.SENTRY_DSN) {
  app.use(sentryInstance.errorHandler());
}
app.use(notFoundHandler);
app.use(errorHandler);

// Server starten
app.listen(port, "0.0.0.0", () => {
  console.log(`Server ist aktiv auf http://${process.env.SERVER_HOST || '0.0.0.0'}:${port}`);
  console.log(`API URL in .env: ${process.env.EXPO_PUBLIC_API_URL || 'nicht definiert'}`);
});
