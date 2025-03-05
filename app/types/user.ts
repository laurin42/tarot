export interface UserProfile {
  id: string;
  authId?: string; // Add authId as an optional property
  name: string;
  email: string;
  username: string;
  picture?: string;
  authProvider: 'google' | 'apple';
  goals: string;
  createdAt: Date;
  updatedAt: Date;
}