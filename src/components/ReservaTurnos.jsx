import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Swal from "sweetalert2";

export const ReservaTurnos = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState(null);
  const [hora, setHora] = useState(null);
  const [telefono, setTelefono] = useState("");
  const [motivoConsulta, setMotivoConsulta] = useState("");
  const [caracteresRestantes, setCaracteresRestantes] = useState(50);
  const [error, setError] = useState(null);

  const VolverHome = () => {
    navigate("/");
  };

  const reservarTurno = () => {
    if (!nombre.trim()) {
      setError("Por favor ingresa tu nombre.");
      return;
    }

    if (!fecha) {
      setError("Por favor selecciona una fecha.");
      return;
    }

    if (!hora) {
      setError("Por favor selecciona una hora.");
      return;
    }

    if (!motivoConsulta.trim()) {
      setError("Por favor ingresa el motivo de la consulta.");
      return;
    }

    if (!telefono.trim()) {
      setError("Por favor ingresa tu número de teléfono.");
      return;
    }

    setError(null);

    const fechaHora = moment(fecha)
      .set({
        hour: hora.getHours(),
        minute: hora.getMinutes(),
        second: 0,
      })
      .toDate();

    const reserva = { nombre, fechaHora, telefono, motivoConsulta };
    console.log("Reserva:", reserva);

    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.push(reserva);
    localStorage.setItem("reservas", JSON.stringify(reservas));

    console.log(
      "Se ha reservado el turno para:",
      nombre,
      "en la fecha y hora:",
      fechaHora,
      "con motivo de consulta:",
      motivoConsulta
    );

    Swal.fire({
      icon: "success",
      title: "¡Turno reservado con éxito!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      VolverHome();
    });
  };

  const handleSeleccionFecha = (date) => {
    setFecha(date);
  };

  const handleMotivoConsultaChange = (e) => {
    const inputText = e.target.value;
    setMotivoConsulta(inputText);

    const remainingChars = 50 - inputText.length;
    setCaracteresRestantes(remainingChars);
  };

  const handleNombreChange = (e) => {
    const inputText = e.target.value;
    // Validar que solo sean letras y máximo 20 caracteres
    if (/^[a-zA-Z\s]{0,20}$/.test(inputText)) {
      setNombre(inputText);
    }
  };

  const handleTelefonoChange = (e) => {
    const inputText = e.target.value;
    // Validar que solo sean números y máximo 10 caracteres
    if (/^\d{0,10}$/.test(inputText)) {
      setTelefono(inputText);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-200 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Reservar Turno</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
          Nombre:
        </label>
        <input
          type="text"
          id="nombre"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          value={nombre}
          onChange={handleNombreChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">
          Fecha:
        </label>
        <DatePicker
          selected={fecha}
          onChange={handleSeleccionFecha}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="hora" className="block text-sm font-medium text-gray-700">
          Hora:
        </label>
        <div className="flex justify-between items-center">
          <DatePicker
            selected={hora}
            onChange={(time) => setHora(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Hora"
            dateFormat="HH:mm"
            className="mt-1 p-2 w-1/2 border border-gray-300 rounded-md hora-input"
          />
          {hora && (
            <div className="hora-detalle">
              Hora seleccionada: {moment(hora).format("HH:mm")}
            </div>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
          Teléfono:
        </label>
        <input
          type="tel"
          id="telefono"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          value={telefono}
          onChange={handleTelefonoChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="motivo-consulta" className="block text-sm font-medium text-gray-700">
          Motivo de Consulta:
        </label>
        <textarea
          id="motivo-consulta"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          value={motivoConsulta}
          onChange={handleMotivoConsultaChange}
        />
        <div className="flex justify-end text-sm text-gray-500">
          {caracteresRestantes <= 10 ? (
            <span className="text-red-500">{caracteresRestantes}</span>
          ) : (
            <span>{caracteresRestantes}</span>
          )}{" "}
          caracteres restantes
        </div>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={reservarTurno}
        >
          Reservar Turno
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ml-auto"
          onClick={VolverHome}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};
