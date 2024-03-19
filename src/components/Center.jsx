import React from 'react';
import imagen from '../assets/fast2.png'; // Importa la imagen

export const Center = () => {
  return (
    <header>
     
     <section id="brand" className="brand bg-blue-50  mt-2"> {/* Reducir el padding */}
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    {/* Contenido de la marca */}
    <div className="brand-left flex flex-col md:w-1/2 md:mr-8">
      {/* Texto de la marca */}
      <div className="text-lg lg:text-xl xl:text-2xl">
        <span className="brand-text text-4xl font-bold text-yellow-600">FAST</span> {/* Reducir el tamaño de la fuente */}
        <br />
        <span id='words' className="brand-subtext"></span> <br /><br />
        <span className="brand-secondary-text">
          Nos encargamos de renovar y optimizar tu equipo
        </span> <br />
        <span className="brand-secondary-text">
          para que funcione tan rápido que no podrás creerlo
        </span>
      </div>
      {/* Botón de solicitud de turno */}
      <div className="mt-4 lg:mt-6"> {/* Reducir el espacio vertical */}
        <a href="https://api.whatsapp.com/send?phone=5493813572880" target="_blank">
          <div className="brand-button bg-yellow-600 text-white py-2 px-6 rounded-lg inline-block">
            solicita tu <span className="yellow-text">TURNO</span>
          </div>
        </a>
      </div>
    </div>
    {/* Imagen de la marca */}
    <div className="md:w-1/2 mt-4 md:mt-0 relative"> {/* Reducir el espacio vertical */}
  <div className="overflow-hidden h-full">
        <img
          src={imagen}
          alt="Laptop"
          className="brand-image w-4/5 mr-8 lg:w-2/3 "
        />
      </div>
    </div>
  </div>
  <div className="container mx-auto mt-4"> {/* Reducir el espacio vertical */}
    <div className="brand-slogan text-center">
      <span className="brand-slogan">
        Soluciones rápidas a cualquier <b>PROBLEMA INFORMÁTICO</b> <br />
        porque nada debe detenerte en tu día.
      </span>
    </div>
  </div>
</section>

    </header>
  );
};
