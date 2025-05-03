import { createContext, useState } from "react";

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const usersLogin = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al iniciar sesión");

      setToken(data.token);
      setUserEmail(email);
      localStorage.setItem("token", data.token);

      alert("¡Autenticación exitosa!");
      return true;
    } catch (error) {
      alert("Email o contraseña incorrectos");
      console.log("Error login:", error.message);
      return false;
    }
  };

  const usersRegister = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Error al registrarse");

      setToken(data.token);
      setUserEmail(email);
      localStorage.setItem("token", data.token);

      alert("¡Registro exitoso!");
      return true;
    } catch (error) {
      alert("Error al registrarse");
      console.log("Error register:", error.message);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    setUserEmail(null);
    localStorage.removeItem("token");
  };

  const getUsersProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al obtener perfil");

      return data;
    } catch (error) {
      console.error("Error en perfil:", error.message);
      return null;
    }
  };

  return (
    <UsersContext.Provider
      value={{
        token,
        setToken,
        logout,
        usersLogin,
        usersRegister,
        userEmail,
        setUserEmail,
        getUsersProfile,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
export default UsersProvider;
