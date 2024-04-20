import React from 'react';
import { useLocation } from 'react-router-dom';

export const Footer = () => {
  const location = useLocation();

  // Verificar si estamos en la ruta "/CartaBar"
  const isCartaBarRoute = location.pathname === '/CartaBar';
  const isPlatoPrincipalRoute = location.pathname === '/PlatoPrincipal';

  // No renderizar el footer si estamos en la ruta "/CartaBar"
  if (isCartaBarRoute,isPlatoPrincipalRoute) {
    return null;
  }
  return (
    <footer className="container-fluid bg-white dark:bg-gray-900 mt-2">
      <div className="mx-auto  w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://www.instagram.com/fastserviciotecnico?igsh=MWJwcW9ibGc0MzU1YQ==" target='_blank' className="flex items-center">
              <img src="https://static.vecteezy.com/system/resources/previews/005/068/773/original/a-simple-fast-logo-or-icon-design-vector.jpg" className="h-16 me-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-yellow-400">Fast</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Link</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Link</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.instagram.com/stories/highlights/18213190999263021/" target='_blank' className="hover:underline ">Historias</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/stories/highlights/17871373031958308/" target='_blank' className="hover:underline">Servicios</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://www.instagram.com/fastserviciotecnico?igsh=MWJwcW9ibGc0MzU1YQ==" className="hover:underline">Fast™</a>. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <i className="fab fa-facebook-square"></i>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <i className="fab fa-discord"></i>
              <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <i className="fab fa-twitter-square"></i>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <i className="fab fa-instagram"></i>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};