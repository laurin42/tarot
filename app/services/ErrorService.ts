// app/services/ErrorService.ts
import * as Sentry from '@sentry/react-native';

type ErrorLevel = 'info' | 'warning' | 'error' | 'fatal';

interface ErrorOptions {
  level?: ErrorLevel;
  context?: Record<string, any>;
  showToUser?: boolean;
  userMessage?: string;
}

class ErrorService {
  /**
   * Initialize error reporting service
   */
  init() {
    // In production, initialize Sentry
    if (process.env.EXPO_PUBLIC_ENVIRONMENT === 'production') {
      Sentry.init({
        dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
        environment: process.env.EXPO_PUBLIC_ENVIRONMENT || 'development',
        // Add these for better debugging info
        tracesSampleRate: 1.0,
        enableAutoSessionTracking: true,
        attachStacktrace: true,
      });
      console.log('✅ Sentry initialized in production mode');
    } else {
      console.log('⚠️ Sentry not initialized (development mode)');
    }
  }

  /**
   * Capture and log an error
   */
  captureException(error: Error, options: ErrorOptions = {}) {
    const { level = 'error', context = {}, showToUser = false, userMessage } = options;
    
    // Always log to console for debugging
    console.error(`[${level.toUpperCase()}] ${error.message}`, {
      error,
      context,
    });
    
    // In production, send to Sentry
    if (process.env.EXPO_PUBLIC_ENVIRONMENT === 'production') {
      Sentry.withScope((scope) => {
        scope.setLevel(level as Sentry.SeverityLevel);
        
        // Add extra context to help with debugging
        Object.entries(context).forEach(([key, value]) => {
          scope.setExtra(key, value);
        });
        
        Sentry.captureException(error);
      });
    }
    
    // Return user-friendly message for UI
    if (showToUser) {
      return userMessage || this.getDefaultUserMessage(error);
    }
    
    return null;
  }
  
  /**
   * Get user-friendly error message
   */
  private getDefaultUserMessage(error: Error): string {
    // Network errors
    if (error.message.includes('Network') || error.message.includes('Failed to fetch')) {
      return 'Netzwerkfehler. Bitte überprüfe deine Internetverbindung.';
    }
    
    // Authentication errors
    if (error.message.includes('auth') || error.message.includes('401')) {
      return 'Authentifizierungsfehler. Bitte erneut anmelden.';
    }
    
    // Default message
    return 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es später noch einmal.';
  }

  // Add a method to track user identity
  setUser(id: string, email?: string, username?: string) {
    if (process.env.EXPO_PUBLIC_ENVIRONMENT === 'production') {
      Sentry.setUser({ id, email, username });
    }
  }

  // Clear user data on logout
  clearUser() {
    if (process.env.EXPO_PUBLIC_ENVIRONMENT === 'production') {
      Sentry.setUser(null);
    }
  }
}

export const errorService = new ErrorService();