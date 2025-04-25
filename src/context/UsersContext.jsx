import { createContext, useState } from "react";

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const logout = () => {
    setToken(false);
  };

  return (
    <UsersContext.Provider
      value={{
        token,
        setToken,
        logout,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
export default UsersProvider;
