import { useState } from "react";
import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { usersLogin } = useContext(UsersContext);
  const navigate = useNavigate();

  const validarInput = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("Debe tener minimo 6 caracteres");
      return;
    }

    const result = await usersLogin(email, password);
    if (result) {
      navigate("/");
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






