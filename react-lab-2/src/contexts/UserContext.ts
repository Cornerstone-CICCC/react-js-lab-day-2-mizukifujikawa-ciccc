import { createContext } from "react";

export type UserContextType = {
  userName: string;
  isLoggedIn: boolean;
  login: (name: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);




