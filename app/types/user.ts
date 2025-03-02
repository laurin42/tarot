export interface UserProfile {
  id: string;
  username: string;
  authProvider: 'google' | 'apple';
  goals: string;
  createdAt: Date;
  updatedAt: Date;
}