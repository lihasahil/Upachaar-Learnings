// UserContext.ts
import { createContext } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  // Add any additional fields you need, like:
  // avatar?: string;
  // role?: "admin" | "user";
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export default UserContext;
