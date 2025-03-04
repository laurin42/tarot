export interface UserProfile {
  id: string;
  username: string;
  email: string;
  name: string;
  picture?: string;
  authProvider: 'google' | 'apple';
  goals: string;
  createdAt: Date;
  updatedAt: Date;
}