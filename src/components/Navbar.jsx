import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  // Verificar si estamos en la ruta "/CartaBar" o "/PlatoPrincipal"
  const isCartaBarRoute = location.pathname === '/CartaBar';
  const isPlatoPrincipalRoute = location.pathname === '/PlatoPrincipal';

  // No renderizar el Navbar si estamos en la ruta "/CartaBar" o "/PlatoPrincipal"
  if (isCartaBarRoute || isPlatoPrincipalRoute) {
    return null;
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white text-lg font-bold">
            <img src="https://static.vecteezy.com/system/resources/previews/005/068/773/original/a-simple-fast-logo-or-icon-design-vector.jpg" alt="Fast Logo" className="h-12" />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-white">Inicio</Link>
          <Link to="/about" className="text-white">Acerca</Link>
          <Link to="/services" className="text-white">Servicios</Link>
          <Link to="/Contacto" className="text-white" target="_blank" rel="noopener noreferrer">Contacto</Link>
          <Link to="/AdminPage" className="text-white" target="_blank" rel="noopener noreferrer">Admin</Link>
          <Link to="/CartaBar" className="text-white" target="_blank" rel="noopener noreferrer">CartaBar</Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${showMenu ? '' : 'hidden'}`}>
        <Link to="/" className="block py-2 px-4 text-white">Inicio</Link>
        <Link to="/about" className="block py-2 px-4 text-white">Acerca</Link>
        <Link to="/services" className="block py-2 px-4 text-white">Servicios</Link>
        <Link to="/AdminPage" className="block py-2 px-4 text-white">Admin</Link>
        <Link to="/CartaBar" className="text-white" target="_blank" rel="noopener noreferrer">CartaBar</Link>
        <a href="/contacto" className="block py-2 px-4 text-white" target="_blank" rel="noopener noreferrer">Contacto</a>
      </div>
    </nav>
  );
};
