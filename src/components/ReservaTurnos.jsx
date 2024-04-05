import React, { useState } from 'react';

export const ReservaTurnos = () => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');

  const reservarTurno = () => {
    // Aquí puedes agregar la lógica para guardar la reserva del turno
    console.log('Se ha reservado el turno para:', nombre, 'en la fecha:', fecha);
    // También puedes enviar los datos a un servidor, etc.
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Reservar Turno</h2>
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre:</label>
        <input
          type="text"
          id="nombre"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha:</label>
        <input
          type="date"
          id="fecha"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={reservarTurno}
      >
        Reservar Turno
      </button>
    </div>
  );
};


