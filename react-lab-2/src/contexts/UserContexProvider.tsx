import { useState, type ReactNode } from 'react'
import { UserContext } from './UserContext'

export const UserContextProvider = ({ children }: {children: ReactNode}) => {
    const [userName, setUserName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const login = (name: string) => {
      setUserName(name);
      setIsLoggedIn(true);
    };
  
    const logout = () => {
      setUserName("");
      setIsLoggedIn(false);
    };
  
    return (
      <UserContext.Provider value={{ userName, isLoggedIn, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  };