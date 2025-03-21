// Diese Import-Syntax sollte für @bugsnag/expo funktionieren
import BugsnagExpo from '@bugsnag/expo';
import React from 'react';

// TypeScript explizit den Typ zuweisen, um Fehler zu vermeiden
const Bugsnag: any = BugsnagExpo;

Bugsnag.start({
  apiKey: process.env.EXPO_PUBLIC_BUGSNAG_API_KEY || 'YOUR_BUGSNAG_API_KEY_HERE',
  releaseStage: process.env.EXPO_PUBLIC_ENVIRONMENT || 'development',
  enabledReleaseStages: ['production', 'staging', 'development'],
  onError: (event: any) => {
    if (__DEV__) {
      console.log('[Bugsnag] Error caught:', event);
    }
    return true;
  }
});

interface BugsnagMetadata {
  [section: string]: Record<string, any>;
}

// Erstelle einen Service für einfacheren Zugriff auf Bugsnag-Funktionen
export const bugsnagService = {
  notify: (error: Error, metadata?: BugsnagMetadata) => {
    Bugsnag.notify(error, (event: any) => {
      if (metadata) {
        // Metadaten zu verschiedenen Abschnitten hinzufügen
        Object.entries(metadata).forEach(([section, data]) => {
          event.addMetadata(section, data);
        });
      }
    });
  },
  
  leaveBreadcrumb: (message: string, metadata?: Record<string, any>, type?: string) => {
    Bugsnag.leaveBreadcrumb(message, metadata, type as any);
  },
  
  setUser: (id: string, name?: string, email?: string) => {
    Bugsnag.setUser(id, email, name);
  }
};

// Definiere einen einfachen Typ für die ErrorBoundary-Props
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

// Fallback-Komponente explizit definieren, um TypeScript-Fehler zu vermeiden
const FallbackComponent: React.FC<ErrorBoundaryProps> = ({ children }) => {
  return React.createElement(React.Fragment, null, children);
};

// Exportiere ErrorBoundary für React-Komponenten
const BugsnagErrorBoundary = Bugsnag.getPlugin('react')?.createErrorBoundary();

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = BugsnagErrorBoundary || FallbackComponent;

export default Bugsnag;