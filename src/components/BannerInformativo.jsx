import React from 'react';

export const BannerInformativo = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Primer banner */}
          <div className="bg-gray-100 hover:bg-gray-200 transition duration-300 rounded-lg p-2">
            <a href="/v/medios-pagos" target="_self" className="block">
              <div className="bn-image">
                <img src="https://w7.pngwing.com/pngs/837/995/png-transparent-computer-icons-bank-money-transfer-angle-logo-bank-card.png" loading="lazy" alt="Banner Informativo" className="w-full h-auto mx-auto" style={{ maxWidth: '100px' }} />
              </div>
              <div className="bn-info text-center mt-2">
                <div className="bn-title text-sm font-bold">Efectivo o Transferencia</div>
                <div className="bn-subtitle text-xs">Ver todos los medios de pago</div>
              </div>
            </a>
          </div>
          {/* Segundo banner */}
          <div className="bg-gray-100 hover:bg-gray-200 transition duration-300 rounded-lg p-2">
            <a href="/contacto" target="_self" className="block">
              <div className="bn-image">
                <img src="https://i.pinimg.com/736x/28/f1/a9/28f1a972e13e4281b5273891ead173eb.jpg" loading="lazy" alt="Banner Informativo" className="w-full h-auto mx-auto" style={{ maxWidth: '100px' }} />
              </div>
              <div className="bn-info text-center mt-2">
                <div className="bn-title text-sm font-bold">Atención al cliente</div>
                <div className="bn-subtitle text-xs">Ver más</div>
              </div>
            </a>
          </div>
          {/* Tercer banner */}
          <div className="bg-gray-100 hover:bg-gray-200 transition duration-300 rounded-lg p-2">
            <a href="/v/formas-envio" target="_self" className="block">
              <div className="bn-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyE3dCY6oSHmcDNTaSBFctIFOUeY8OpOrxCw&s" loading="lazy" alt="Banner Informativo" className="w-full h-auto mx-auto" style={{ maxWidth: '100px' }} />
              </div>
              <div className="bn-info text-center mt-2">
                <div className="bn-title text-sm font-bold">Envíos a Todo el País</div>
                <div className="bn-subtitle text-xs">Ver más</div>
              </div>
            </a>
          </div>
          {/* Cuarto banner */}
          <div className="bg-gray-100 hover:bg-gray-200 transition duration-300 rounded-lg p-2">
            <a href="https://api.whatsapp.com/send?phone=5493813572880" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bn-image">
                <img src="https://1000marcas.net/wp-content/uploads/2019/11/WhatsApp-logo-600x338.png" loading="lazy" alt="Banner Informativo" className="w-full h-auto mx-auto" style={{ maxWidth: '100px' }} />
              </div>
              <div className="bn-info text-center mt-2">
                <div className="bn-title text-sm font-bold">¡Hablanos por Whatsapp!</div>
                <div className="bn-subtitle text-xs">Comenzar</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
