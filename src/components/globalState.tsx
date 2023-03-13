import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  stack: string;
}

interface userProfile {
  data: User[];
  setData: React.Dispatch<React.SetStateAction<User[]>>;
}

export const UserContext = createContext<userProfile | null>(null);

export const GlobalUser: React.FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<User[]>([
    {
      id: 1,
      name: "Peter",
      stack: "React",
    },
    {
      id: 2,
      name: "James",
      stack: "Node",
    },
    {
      id: 3,
      name: "Parker",
      stack: "Node JS",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(data));
  }, [data]);

  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
};