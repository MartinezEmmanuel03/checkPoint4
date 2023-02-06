import { createContext, useState, useEffect, useMemo } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(
    sessionStorage.user !== "undefined"
      ? JSON.parse(sessionStorage.getItem("user"))
      : null
  );

  const handleUser = (data) => {
    setUser(data);
  };

  const logout = () => {
    setUser();
    sessionStorage.removeItem("user");
  };

  const updateUserProfil = () => {
    setUser({ ...user, profil: true });
  };

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const contextValue = useMemo(
    () => ({
      user,
      handleUser,
      updateUserProfil,
      logout,
    }),
    [user, handleUser, updateUserProfil, logout]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export default {
  UserContext,
  UserProvider,
};
