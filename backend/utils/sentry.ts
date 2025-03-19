import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';
import { Application } from 'express';

export function initSentry(app: Application) {
  if (process.env.NODE_ENV === 'production' && process.env.SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      integrations: [
        nodeProfilingIntegration(),  // Nur das Profiling als Integration
      ],
      tracesSampleRate: 1.0,
      profilesSampleRate: 1.0,
      environment: process.env.NODE_ENV,
    });

    console.log('✅ Sentry initialized in production mode');
  } else {
    console.log('⚠️ Sentry not initialized (development mode or missing DSN)');
  }

  return Sentry;
}
