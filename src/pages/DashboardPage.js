import React from "react";
import { useNavigate } from "react-router-dom";

// Panel principal del cliente
function DashboardPage() {

  const navigate = useNavigate();

  // Datos simulados del cliente
  const nombreCliente = "Cliente Demo";
  const eventosPendientes = 2;

  const cerrarSesion = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Bienvenido, {nombreCliente}</h2>

      <p>Tienes {eventosPendientes} eventos pendientes.</p>

      <div>
        <h3>Próximo Evento</h3>
        <p>Evento: Fiesta Empresarial</p>
        <p>Fecha: 20 de Junio</p>
      </div>

      <button onClick={cerrarSesion}>Cerrar sesión</button>
    </div>
  );
}

export default DashboardPage;