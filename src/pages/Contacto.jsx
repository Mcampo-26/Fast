import React from 'react';

export const Contacto = () => {
  return (

      <main  >    
        <section className=" mx-auto py-5 mt-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="bg-gray-800 text-white p-6 rounded-lg ">
              <h3 className="text-center text-lg font-semibold mb-4">Envíanos un mensaje</h3>
              <form>
                <div className="mb-4 ">
                  <label className="block text-sm text-light">Nombre y apellido</label>
                  <input type="text" placeholder="Mauricio Campo" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-sm text-white" required />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-light">Email</label>
                  <input type="email" placeholder="mcampo26@gmail.com" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-sm text-white" required />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-light">Consulta</label>
                  <textarea className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-sm text-white" placeholder="Ingrese su Consulta" rows="4" required></textarea>
                </div>
                <div className="mb-4">
                  <input type="checkbox" className="form-checkbox text-blue-500" checked />
                  <label className="ml-2 text-sm text-light">Suscríbete a nuestras novedades - Newsletters</label>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-400">Enviar</button>
              </form>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-lg">
              <h3 className="text-center text-lg font-semibold mb-4">Fast</h3>
              <p className="text-light">Dirección para llegar a nuestra sede a hacer los trámites personalmente, te esperamos para brindarte la mejor información y nuestra ayuda.</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d408.08006585337586!2d-65.20738241904597!3d-26.836268517624042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225df5fcca2727%3A0x331b810e527e57fd!2sFast%20-%20Servicio%20T%C3%A9cnico%20Inmediato!5e0!3m2!1ses-419!2sar!4v1710796564064!5m2!1ses-419!2sar"
                className="w-full mt-4" height="255" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        </section>
      </main>
   
  );
};
