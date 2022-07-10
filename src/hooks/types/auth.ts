import { ReactNode } from "react";

export interface User {
  id: number;
  display_name: string;
  email: string;
  profile_image_url: string;
}

export interface AuthContextData {
  user: User;
  isLoggingOut: boolean;
  isLoggingIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

export interface AuthProviderData {
  children: ReactNode;
}