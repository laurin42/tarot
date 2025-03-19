// app/services/apiClient.ts
import { errorService } from './ErrorService';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ApiOptions extends RequestInit {
  showError?: boolean;
  customErrorMessage?: string;
}

const apiClient = {
  async request<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
    const { showError = true, customErrorMessage, ...fetchOptions } = options;
    
    // Set default headers
    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
      ...(fetchOptions.headers as { [key: string]: string }),
    };
    
    // Add auth token if available
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    } catch (error) {
      console.log('Error getting token', error);
    }
    
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}${endpoint}`, {
        ...fetchOptions,
        headers,
      });
      
      // Handle HTTP errors (non-2xx responses)
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.message || `API error: ${response.status} ${response.statusText}`;
        const error = new Error(errorMessage);
        throw error;
      }
      
      // Handle empty responses
      if (response.status === 204) {
        return {} as T;
      }
      
      return await response.json() as T;
    } catch (error) {
      // Log the error and optionally show to user
      const userMessage = errorService.captureException(error as Error, {
        context: { endpoint, options: { ...options, headers } },
        showToUser: showError,
        userMessage: customErrorMessage
      });
      
      // Rethrow with user-friendly message for component handling
      if (userMessage) {
        const enhancedError = new Error(userMessage);
        throw enhancedError;
      }
      
      throw error;
    }
  },
  
  get<T>(endpoint: string, options?: ApiOptions) {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  },
  
  post<T>(endpoint: string, data: any, options?: ApiOptions) {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  
  put<T>(endpoint: string, data: any, options?: ApiOptions) {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },
  
  delete<T>(endpoint: string, options?: ApiOptions) {
    return this.request<T>(endpoint, {
      ...options,
      method: 'DELETE'
    });
  }
};

export default apiClient;