import Bugsnag from '@bugsnag/expo';
import React from 'react';

// Überprüfen Sie, ob Bugsnag bereits initialisiert wurde, um mehrfache Initialisierungen zu vermeiden
if (!Bugsnag.isStarted()) {
  // Initialisiere Bugsnag mit deinem API-Schlüssel
  Bugsnag.start({
    apiKey: process.env.EXPO_PUBLIC_BUGSNAG_API_KEY || '12345678901234567890123456789012',
    releaseStage: process.env.EXPO_PUBLIC_ENVIRONMENT || 'development',
    enabledReleaseStages: ['production', 'staging', 'development'],
    onError: (event) => {
      if (__DEV__) {
        console.log('[Bugsnag] Error caught:', event);
      }
      return true;
    }
  });
}

interface BugsnagMetadata {
  [section: string]: Record<string, any>;
}

// Erstelle einen Service für einfacheren Zugriff auf Bugsnag-Funktionen
export const bugsnagService = {
  notify: (error: Error, metadata?: BugsnagMetadata) => {
    if (!Bugsnag.isStarted()) return;
    
    Bugsnag.notify(error, (event) => {
      if (metadata) {
        // Metadaten zu verschiedenen Abschnitten hinzufügen
        Object.entries(metadata).forEach(([section, data]) => {
          event.addMetadata(section, data);
        });
      }
    });
  },
  
  leaveBreadcrumb: (message: string, metadata?: Record<string, any>, type?: string) => {
    if (!Bugsnag.isStarted()) return;
    Bugsnag.leaveBreadcrumb(message, metadata, type as any);
  },
  
  setUser: (id: string, name?: string, email?: string) => {
    if (!Bugsnag.isStarted()) return;
    Bugsnag.setUser(id, email, name);
  },
  
  // Hilfsfunktion zum Testen
  isStarted: () => {
    return Bugsnag.isStarted();
  }
};

export default Bugsnag;