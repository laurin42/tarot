import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';

type ErrorLevel = 'info' | 'warning' | 'error' | 'fatal';

interface ErrorOptions {
  context?: Record<string, unknown>;
  level?: ErrorLevel;
  tags?: Record<string, string>;
}

class CrashlyticsService {
  /**
   * Initialize Firebase Crashlytics with user information
   */
  init(userId?: string, username?: string): void {
    if (userId) {
      crashlytics().setUserId(userId);
    }
    
    if (username) {
      crashlytics().setAttributes({
        username: username
      });
    }
  }

  /**
   * Record a non-fatal error with Crashlytics
   */
  recordError(error: Error, options?: ErrorOptions): void {
    // Add custom attributes if provided
    if (options?.context) {
      const attributes: Record<string, string> = {};
      
      // Convert context to string attributes
      Object.entries(options.context).forEach(([key, value]) => {
        attributes[key] = String(value);
      });
      
      crashlytics().setAttributes(attributes);
    }
    
    // Record the error
    crashlytics().recordError(error);
    
    // Log to console in development environment
    if (process.env.EXPO_PUBLIC_ENVIRONMENT !== "production") {
      console.error("Error captured by CrashlyticsService:", error);
      if (options?.context) {
        console.error("Context:", options.context);
      }
    }
  }
  
  /**
   * Log a message to Crashlytics
   */
  log(message: string): void {
    crashlytics().log(message);
  }
  
  /**
   * Set a custom attribute in Crashlytics
   */
  setAttribute(key: string, value: string): void {
    crashlytics().setAttribute(key, value);
  }
  
  /**
   * Set multiple custom attributes in Crashlytics
   */
  setAttributes(attributes: Record<string, string>): void {
    crashlytics().setAttributes(attributes);
  }
  
  /**
   * Set the current screen in Analytics
   */
  setCurrentScreen(screenName: string, screenClass?: string): Promise<void> {
    return analytics().logScreenView({
      screen_name: screenName,
      screen_class: screenClass || screenName,
    });
  }
  
  /**
   * Log a custom event to Analytics
   */
  logEvent(name: string, params?: Record<string, any>): Promise<void> {
    return analytics().logEvent(name, params);
  }
}

export const crashlyticsService = new CrashlyticsService();