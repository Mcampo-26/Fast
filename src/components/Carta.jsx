import React from 'react';
import './Css/Carta.css';

export const Carta = () => {
  return (
    <>
      <header>
        <img src="https://restoamericano.vercel.app/assets/logo2-392bb098.png" alt="Logo" className="h-20 mx-auto margen" />
      </header>
      <nav className="w-1/4 mx-auto mt-8">
        <div className="p-4 margen">
          <ul className="space-y-2">
            <li>
              <a href="#" className="block text-center text-white text-lg md:text-xl  lg:text-2xl hover:text-black hover:bg-white px-4 py-2 rounded-lg border bg-olive transition-all duration-300 md:text-base lg:text-lg">CAFETERÍA</a>
            </li>
            <li>
              <a href="#" className="block text-center text-white text-lg md:text-xl lg:text-2xl hover:text-black hover:bg-white px-4 py-2 rounded-lg border bg-olive transition-all duration-300 md:text-base lg:text-lg">PLATO PRINCIPAL</a>
            </li>
            <li>
              <a href="#" className="block text-center text-white text-lg md:text-xl lg:text-2xl hover:text-black hover:bg-white px-4 py-2 rounded-lg border bg-olive transition-all duration-300 md:text-base lg:text-lg">BEBIDAS SIN ALCOHOL</a>
            </li>
            <li>
              <a href="#" className="block text-center text-white text-lg md:text-xl lg:text-2xl hover:text-black hover:bg-white px-4 py-2 rounded-lg border bg-olive transition-all duration-300 md:text-base lg:text-lg">BEBIDAS CON ALCOHOL</a>
            </li>
            <li>
              <a href="#" className="block text-center text-white text-lg md:text-xl lg:text-2xl hover:text-black hover:bg-white px-4 py-2 rounded-lg border bg-olive transition-all duration-300 md:text-base lg:text-lg">MENÚ COMPLETO</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
