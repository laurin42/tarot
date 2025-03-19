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
    // In production, you would initialize Sentry here
    if (process.env.EXPO_PUBLIC_ENVIRONMENT === 'production') {
      Sentry.init({
        dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
        environment: process.env.EXPO_PUBLIC_ENVIRONMENT || 'development',
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
    
    // Log to console in development
    if (process.env.NODE_ENV !== 'production') {
      console.error(`[${level.toUpperCase()}] ${error.message}`, {
        error,
        context,
      });
    }
    
    // In production, send to Sentry
    if (process.env.NODE_ENV === 'production') {
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
    if (error.message.includes('Network request failed')) {
      return 'Verbindungsproblem. Bitte überprüfe deine Internetverbindung.';
    }
    
    // API errors
    if (error.message.includes('401')) {
      return 'Deine Sitzung ist abgelaufen. Bitte melde dich erneut an.';
    }
    
    if (error.message.includes('403')) {
      return 'Du hast keine Berechtigung für diese Aktion.';
    }
    
    if (error.message.includes('404')) {
      return 'Die angeforderten Daten wurden nicht gefunden.';
    }
    
    // Default error message
    return 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es später noch einmal.';
  }
}

export const errorService = new ErrorService();