import React from 'react';
import './Css/Carta.css';

export const Carta = () => {
  return (
    <>
    <div className='bg-carta'>
      <header  >
        <img src="https://restoamericano.vercel.app/assets/logo2-392bb098.png" alt="Logo" className="h-20 mx-auto margen " />
      </header>
      
      <nav className="w-1/4 mx-auto mt-8">
        <div className="p-4 margen">
          <ul className="space-y-2">
          <li>
  <a href="#" className="block text-center text-white text-lg  hover:text-black hover:bg-white px-4 py-2 rounded-lg border bg-olive transition-all duration-300 ">
    CAFETERÍA
  </a>
</li>
<li>
<a href="/PlatoPrincipal" target="_blank" className="block text-center text-white text-lg hover:text-black hover:bg-white px-4 py-2 rounded-lg border bg-olive transition-all duration-300">
    PLATO PRINCIPAL
</a>

</li>
<li>
  <a href="#" className="block text-center text-white text-lg hover:text-black hover:bg-white px-4 py-2 rounded-lg border bg-olive transition-all duration-300 
  ">
    BEBIDAS SIN ALCOHOL
  </a>
</li>
<li>
  <a href="#" className="block text-center text-white text-lg hover:text-black hover:bg-white px-4 py-2 rounded-lg border bg-olive transition-all duration-300 
  ">
    BEBIDAS CON ALCOHOL
  </a>
</li>
<li>
  <a href="#" className="block text-center text-white text-lg hover:text-black hover:bg-white px-4 py-2 rounded-lg border bg-olive transition-all duration-300 
  ">
    MENÚ COMPLETO
  </a>
</li>

          </ul>
        </div>
      </nav>
      </div>
    </>
  );
};
