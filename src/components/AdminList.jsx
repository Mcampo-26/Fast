import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Css/Admin.css";

const AdminList = () => {
  const [reservas, setReservas] = useState([]);

  // Cargar las reservas al montar el componente
  useEffect(() => {
    const storedReservas = JSON.parse(localStorage.getItem("reservas")) || [];
    setReservas(storedReservas);
  }, []);

  // Función para eliminar una reserva
  const eliminarReserva = (index) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevasReservas = [...reservas];
        nuevasReservas.splice(index, 1);
        setReservas(nuevasReservas);
        localStorage.setItem("reservas", JSON.stringify(nuevasReservas));
        Swal.fire("Eliminado!", "La reserva ha sido eliminada.", "success");
      }
    });
  };

  // Función para marcar una reserva como completada
  const marcarComoCompletada = (index) => {
    const nuevasReservas = [...reservas];
    nuevasReservas[index].completada = !nuevasReservas[index].completada;
    setReservas(nuevasReservas);
    localStorage.setItem("reservas", JSON.stringify(nuevasReservas));
  };

  return (
    <div className="overflow-x-auto mt-6 flex flex-wrap mb-4">
      <table className="table-auto divide-y divide-gray-200 w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left font-medium text-blue-800 uppercase tracking-wider">
              Nombre
            </th>
            <th className="px-6 py-3 text-left font-medium text-blue-800 uppercase tracking-wider">
              Fecha
            </th>
            <th className="px-6 py-3 text-left font-medium text-blue-800 uppercase tracking-wider">
              Hora
            </th>
            <th className="px-6 py-3 text-left font-medium text-blue-800 uppercase tracking-wider">
              Telefono
            </th>
            <th className="px-6 py-3 text-left font-medium text-blue-800 uppercase tracking-wider">
              Motivo de consulta
            </th>
            <th className="px-6 py-3 text-left font-medium text-blue-800 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reservas.map((reserva, index) => (
            <tr key={index}>
              <td
                className="px-4 sm:px-6 py-2 sm:py-4 whitespace-nowrap sm:whitespace-normal"
              >
                {reserva.nombre}
              </td>
              <td
                className="px-4 sm:px-6 py-2 sm:py-4 whitespace-nowrap sm:whitespace-normal"
              >
                {new Date(reserva.fechaHora).toLocaleDateString()}
              </td>
              <td
                className="px-4 sm:px-6 py-2 sm:py-4 whitespace-nowrap sm:whitespace-normal"
              >
                {new Date(reserva.fechaHora).toLocaleTimeString()}
              </td>
              <td
                className="px-4 sm:px-6 py-2 sm:py-4 whitespace-nowrap sm:whitespace-normal"
              >
                {reserva.telefono}
              </td>
              <td
                className="px-4 sm:px-6 py-2 sm:py-4 whitespace-normal sm:whitespace-pre-wrap"
              >
                {reserva.motivoConsulta}
              </td>
              <td
                className="px-4 sm:px-6 py-2 sm:py-4 whitespace-nowrap"
              >
                <button
                  className="mr-4 bg-red-500 text-white px-2 py-1 rounded-md"
                  onClick={() => eliminarReserva(index)}
                >
                  Eliminar
                </button>
                <a
                  href={`https://wa.me/${reserva.telefono}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 mt-4"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-green-500 ml-1"
                    style={{ fontSize: "28px" }}
                  />
                </a>
                <label className="check-container ml-2">
                  <input
                    type="checkbox"
                    checked={reserva.completada}
                    onChange={() => marcarComoCompletada(index)}
                  />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminList;
