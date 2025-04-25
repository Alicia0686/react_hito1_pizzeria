import { useState } from "react";
import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(UsersContext);


  const validarInput = (e) => {
    e.preventDefault();

    

    if (!email.trim() || !password.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("Debe tener minimo 6 caracteres");
      return;
    }

    if (email === "users@gmail.com" && password === "123456") {
      alert("!Autenticación exitosa!");
      setToken(true)
    } else {
      alert("Email o contraseña incorrectos");
    }
  };

  return (
    <>
      <form className="formulario" onSubmit={validarInput}>
        <h2>Login</h2>
        <div className="inputs">
          <label>Email</label>
          <input
            type="text"
            placeholder="Ingrese su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputs">
          <label>Contraseña</label>
          <input
            type="text"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="btn1">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
};
     
export default Login;
