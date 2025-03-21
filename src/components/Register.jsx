import { useState } from "react";
import "./Login.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [checkPass, setCheckPass] = useState("");

  const validarInput = (e) => {
    e.preventDefault();

    if (!email.trim() || !pass.trim() || !checkPass.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (pass.length < 6) {
      alert("Debe tener minimo 6 caracteres");
      return;
    }

    if (pass !== checkPass) {
      alert("Las contraseñas deben ser iguales");
      return;
    }

    console.log(email, pass, checkPass);

    alert("!Registro exitoso!");
  };

  return (
    <>
      <form className="formulario" onSubmit={validarInput}>
        <h2>Register</h2>
        <div className="inputs">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputs">
          <label>Contraseña</label>
          <input
            type="text"
            placeholder="Contraseña"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <div className="inputs">
          <label>Confirmar contraseña</label>
          <input
            type="text"
            placeholder="Confirmar contraseña"
            value={checkPass}
            onChange={(e) => setCheckPass(e.target.value)}
          />
        </div>

        <div className="btn1">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
};

export default Register;
