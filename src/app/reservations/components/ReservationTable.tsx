"use client";
import React, { useEffect, useState } from "react";

import {
  Carrera,
  deleteReservation,
  getReservations,
  Laboratory,
  Reservation,
  Shift,
} from "../utils/api";
import EditReservationModal from "./EditReservationModal";

interface ReservationsTableProps {
  laboratorios: Laboratory[];
  carreras: Carrera[];
}

function ReservationsTable({ laboratorios, carreras }: ReservationsTableProps) {
  const [data, setData] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Estado para controlar la apertura del modal
  const [selectedReservation, setSelectedReservation] =
    useState<Reservation | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reservations = await getReservations();
        setData(reservations);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener reservas:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteClick = async (reservationId: number) => {
    try {
      await deleteReservation(reservationId);
      const updatedData = data.filter(
        (reservation) => reservation.id !== reservationId
      );
      setData(updatedData);
    } catch (error) {
      console.error("Error al eliminar la reserva:", error);
    }
  };

  const handleEditClick = (reservation: Reservation) => {
    setSelectedReservation(reservation); // Establece la reserva seleccionada
    setIsEditModalOpen(true); // Abre el modal de edición
  };

  const handleEditSave = (editedReservation: Reservation) => {
    // Encuentra el índice de la reserva seleccionada
    const selectedIndex = data.findIndex(
      (reservation) => reservation.id === editedReservation.id
    );

    if (selectedIndex !== -1) {
      // Clona el arreglo de datos y actualiza la reserva en el índice seleccionado
      const updatedData = [...data];
      updatedData[selectedIndex] = editedReservation;

      // Actualiza los estados
      setData(updatedData);
      setSelectedReservation(null);
      setIsEditModalOpen(false);
    }
  };

  // Función para formatear las horas según el turno
  const formatTimeWithShift = (time: string, shift: Shift) => {
    const shiftTimeFormats = {
      [Shift.morning]: { label: "AM", format: "AM" },
      [Shift.afternoon]: { label: "PM", format: "PM" },
      [Shift.night]: { label: "PM", format: "PM" },
    };
    const timeFormat = shiftTimeFormats[shift];
    return `${time} ${timeFormat.label}`;
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Reservas</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Hora de Inicio
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Hora de Finalización
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Turno
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Laboratorio
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Carrera
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((reservation) => (
            <tr key={reservation.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {reservation.date.split("T")[0]}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formatTimeWithShift(reservation.startTime, reservation.shift)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formatTimeWithShift(reservation.endTime, reservation.shift)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {reservation.shift}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {reservation.laboratory.labName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {reservation.carrera.nombre}
              </td>

              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleEditClick(reservation)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() =>
                    reservation.id !== undefined
                      ? handleDeleteClick(reservation.id)
                      : null
                  }
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedReservation !== null && (
        <EditReservationModal
          reservation={selectedReservation}
          onSave={handleEditSave}
          onCancel={() => setIsEditModalOpen(false)}
          laboratorios={laboratorios}
          carreras={carreras}
        />
      )}
    </div>
  );
}

export default ReservationsTable;
