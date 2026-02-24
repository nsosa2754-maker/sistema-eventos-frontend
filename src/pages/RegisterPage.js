import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Página de registro del cliente
function RegisterPage() {

  // Estados del formulario
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!usuario || !correo || !password || !confirmPassword) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Simulación de registro exitoso
    alert("Registro exitoso. Ahora puedes iniciar sesión.");

    // Redirige al login
    navigate("/");
  };

  return (
     <div className="container">
      <h2>Registro de Cliente</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>

        <div>
          <label>Correo:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit">Registrarse</button><p>
  ¿Ya tienes cuenta?{" "}
  <a href="/">Inicia sesión</a>
</p>

      </form>
    </div>
  );
}

export default RegisterPage;
