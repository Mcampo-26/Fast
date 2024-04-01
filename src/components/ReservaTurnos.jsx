import React from 'react';
import './Css/Reserva.css';

export const ReservaTurnos = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
  };

  const handlePaymentClick = () => {
    // Aquí puedes agregar la lógica para manejar el pago
    alert('Redirect to payment gateway');
  };

  return (
    <main className="flex justify-center items-center h-screen">
      {/* Tarjeta con formulario */}
      <div className="bg-gray-200 p-6 rounded-md shadow-md mr-6">
        <h2 className="text-xl font-semibold mb-4">Formulario de Reserva</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-1">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="4" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Enviar</button>
        </form>
      </div>

      {/* Tarjeta con botón de pago */}
      <div className="bg-gray-200 p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Pagar Turno</h2>
        <p className="text-gray-700 mb-4">Haz clic en el botón para proceder con el pago.</p>
        <button onClick={handlePaymentClick} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">Pagar Ahora</button>
      </div>
    </main>
  );
};
