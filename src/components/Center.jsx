import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReservaTurnos } from "./ReservaTurnos";





export const Center = () => {
  const [mostrarReservaTurnos, setMostrarReservaTurnos] = useState(false);

  const abrirReservaTurnos = () => {
    setMostrarReservaTurnos(true);
  };

  const cerrarReservaTurnos = () => {
    setMostrarReservaTurnos(false);
  };

  return (
    <>
      <header>
        <section id="brand" className="brand bg-blue-50 mt-2 py-8">
          {" "}
          {/* Reducir el padding */}
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            {/* Contenido de la marca */}
            <div className="brand-left flex flex-col md:w-1/2 md:mr-8">
              {/* Texto de la marca */}
              <div className="text-lg lg:text-xl xl:text-2xl">
                <span className="brand-text text-3xl lg:text-4xl font-bold text-yellow-600">
                  FAST
                </span>{" "}
                {/* Reducir el tamaño de la fuente */}
                <br />
                <span id="words" className="brand-subtext"></span> <br />
                <br />
                <span className="brand-secondary-text">
                  Nos encargamos de renovar y optimizar tu equipo
                </span>{" "}
                <br />
                <span className="brand-secondary-text">
                  para que funcione tan rápido que no podrás creerlo
                </span>
              </div>
              {/* Botón de solicitud de turno */}
              <div className="mt-4 lg:mt-6">
                {" "}
                {/* Reducir el espacio vertical */}
                {/* Utilizamos un enlace de React Router para llevar al usuario a la ruta "Reserva" */}
                <Link
                  to="/reserva"
                  className="brand-button bg-yellow-600 text-white py-2 px-6 rounded-lg inline-block"
                >
                  RESERVA TU TURNO 10% off!!
                </Link>
              </div>
            </div>
            {/* Imagen de la marca */}
            <div className="md:w-1/2 mt-4 md:mt-0 relative">
              {" "}
              {/* Reducir el espacio vertical */}
              <div className="overflow-hidden h-full rounded-md">
                {" "}
                {/* Ajustar la clase de redondez */}
                <img
                  src="https://www.innovacionate.com/images/reparacion-computadoras.png"
                  alt="Laptop"
                  className="brand-image w-4/5 mr-8 lg:w-2/6 mb-12 rounded-md float-left" // Ajustar la clase de redondez y alineación
                />
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-4">
            {" "}
            {/* Reducir el espacio vertical */}
            <div className="brand-slogan text-center"></div>
          </div>
        </section>
      </header>

      {/* Renderizar el componente ReservaTurnos si mostrarReservaTurnos es verdadero */}
      {mostrarReservaTurnos && (
        <div className="modal">
          <div className="modal-contenido">
            <button onClick={cerrarReservaTurnos} className="cerrar">
              Cerrar
            </button>
            <ReservaTurnos />
          </div>
        </div>
      )}
    </>
  );
};
