import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario.trim() !== "" && password.trim() !== "") {
      console.log("Inicio de sesión exitoso");
      navigate("/dashboard");
    } else {
      alert("Por favor complete todos los campos");
    }
  };

return (
  <div className="container">
    <h2>Iniciar Sesión</h2>

    <form onSubmit={handleSubmit}>
      <label>Usuario:</label>
      <input
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <label>Contraseña:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Ingresar</button><p>
  ¿No tienes cuenta?{" "}
  <a href="/registro">Regístrate aquí</a>
</p>

    </form>
  </div>
);

}

export default LoginPage;
