import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';
import { Application } from 'express';

// Return the Sentry instance instead of void
export function initSentry(app: Application) {
  if (process.env.NODE_ENV === 'production' && process.env.SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      integrations: [
        // Use direct imports of integrations instead of Sentry.Integrations
        Sentry.integrations.express({ app }), // Replace expressIntegration
        nodeProfilingIntegration(),
      ],
      tracesSampleRate: 1.0,
      profilesSampleRate: 1.0,
      environment: process.env.NODE_ENV,
    });

    console.log('✅ Sentry initialized in production mode');
  } else {
    console.log('⚠️ Sentry not initialized (development mode or missing DSN)');
  }
  
  return Sentry; // Return the Sentry object
}
