import React from 'react';

export const Center = () => {
  return (
    <header>
      <section id="brand" className="brand bg-blue-50 mt-2 py-8"> {/* Reducir el padding */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Contenido de la marca */}
          <div className="brand-left flex flex-col md:w-1/2 md:mr-8">
            {/* Texto de la marca */}
            <div className="text-lg lg:text-xl xl:text-2xl">
              <span className="brand-text text-3xl lg:text-4xl font-bold text-yellow-600">FAST</span> {/* Reducir el tamaño de la fuente */}
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
            <div className="overflow-hidden h-full rounded-md"> {/* Ajustar la clase de redondez */}
              <img
                src="https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/329588930_744450246907526_6590080804087017891_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGiZVglOJGD-eOok0iLVVgRlMekGL8qGoSUx6QYvyoahA8_ChfEok9vR0E_MRWdRN6gBatYe6bYUH8BtXD7SlPF&_nc_ohc=6koZLvoa22oAX9-R4xD&_nc_ht=scontent.ftuc1-2.fna&oh=00_AfCpo0trHbx14yfhHJMhlU3Os7FujD42-4A1W1-YV3-_9w&oe=660268DF"
                alt="Laptop"
                className="brand-image w-4/5 mr-8 lg:w-2/6 mb-12 rounded-md float-left" // Ajustar la clase de redondez y alineación
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-4"> {/* Reducir el espacio vertical */}
          <div className="brand-slogan text-center"></div>
        </div>
      </section>
    </header>
  );
};
