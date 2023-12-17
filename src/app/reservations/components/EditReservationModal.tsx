import React, { useEffect, useState } from "react";
import {
  Carrera,
  Laboratory,
  Reservation,
  Shift,
  getCareers,
  getLaboratories,
} from "../utils/api";
import { updateReservation } from "../utils/api";
import { FieldError, useForm } from "react-hook-form";

interface EditReservationModalProps {
  reservation: Reservation;
  onSave: (editedReservation: Reservation) => void;
  onCancel: () => void;
  laboratorios: Laboratory[]; // Agrega esta propiedad
  carreras: Carrera[]; // Agrega esta propiedad
}

function EditReservationModal({
  reservation,
  onSave,
  onCancel,
}: EditReservationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [editedReservation, setEditedReservation] = useState(reservation);
  const [laboratorios, setLaboratorios] = useState<Laboratory[]>([]);
  const [carreras, setCarreras] = useState<Carrera[]>([]);
  const { register, handleSubmit, setValue, formState, setError } = useForm();
  const { errors } = formState;

  useEffect(() => {
    const fetchLaboratories = async () => {
      try {
        const laboratoriesData = await getLaboratories();
        if (!Array.isArray(laboratoriesData)) {
          throw new Error(
            "La respuesta de laboratorios no es un arreglo válido."
          );
        }
        setLaboratorios(laboratoriesData);
      } catch (error) {
        console.error("Error al obtener laboratorios:", error);
      }
    };

    const fetchCarreras = async () => {
      try {
        const carrerasData = await getCareers();
        setCarreras(carrerasData);
      } catch (error) {
        console.error("Error al obtener carreras:", error);
      }
    };

    fetchLaboratories();
    fetchCarreras();
  }, []);

  const handleSave = () => {
    onSave(editedReservation);
    setIsOpen(false);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedReservation({
      ...editedReservation,
      date: event.target.value,
    });
  };

  const handleShiftChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEditedReservation({
      ...editedReservation,
      shift: event.target.value as Shift,
    });
  };

  const handleStartTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditedReservation({
      ...editedReservation,
      startTime: event.target.value,
    });
  };

  const handleEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedReservation({
      ...editedReservation,
      endTime: event.target.value,
    });
  };

  const handleLaboratoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEditedReservation({
      ...editedReservation,
      laboratoryId: parseInt(event.target.value),
    });
  };

  const handleCareerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEditedReservation({
      ...editedReservation,
      careerId: parseInt(event.target.value),
    });
  };

  const dateError = errors.date as FieldError | undefined;
  const shiftError = errors.shift as FieldError | undefined;

  // Otras funciones de manejo de cambios de campos

  const validateAndSave = async () => {
    try {
      // Validación de campos (puedes personalizarla según tus necesidades)
      if (!editedReservation.date) {
        setError("date", {
          type: "required",
          message: "La fecha es obligatoria",
        });
        return;
      }

      if (!editedReservation.startTime || !editedReservation.endTime) {
        setError("startTime", {
          type: "required",
          message: "Hora de inicio y hora de finalización son obligatorias",
        });
        setError("endTime", {
          type: "required",
          message: "Hora de inicio y hora de finalización son obligatorias",
        });
        return;
      }

      // Guardar la reserva si pasa la validación
      await handleSave();
    } catch (error) {
      console.error("Error al guardar la reserva:", error);
    }
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Editar Reserva</h2>
        <form onSubmit={handleSubmit(validateAndSave)}>
          <div>
            <label
              htmlFor="editDate"
              className="block text-sm font-medium text-gray-700"
            >
              Fecha de Edición
            </label>
            <input
              value={editedReservation.date}
              onChange={handleDateChange}
              type="date"
              id="editDate"
              name="date"
              className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none ${
                errors.date ? "border-red-500" : "border-black"
              }`}
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">
                {dateError ? dateError.message : ""}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="editShift"
              className="block text-sm font-medium text-gray-700"
            >
              Turno de Edición
            </label>
            <select
              value={editedReservation.shift}
              onChange={handleShiftChange}
              id="editShift"
              name="shift"
              className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none ${
                errors.shift ? "border-red-500" : "border-black"
              }`}
            >
              <option value={Shift.morning}>Matutino</option>
              <option value={Shift.afternoon}>Vespertino</option>
              <option value={Shift.night}>Nocturno</option>
            </select>
            {errors.shift && (
              <p className="text-red-500 text-sm mt-1">
                {shiftError ? shiftError.message : ""}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="editStartTime"
              className="block text-sm font-medium text-gray-700"
            >
              Hora de Inicio de Edición
            </label>
            <input
              value={editedReservation.startTime}
              onChange={handleStartTimeChange}
              type="time"
              id="editStartTime"
              className="w-full px-4 py-2 border border-black rounded-md bg-white focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="editEndTime"
              className="block text-sm font-medium text-gray-700"
            >
              Hora de Finalización de Edición
            </label>
            <input
              value={editedReservation.endTime}
              onChange={handleEndTimeChange}
              type="time"
              id="editEndTime"
              className="w-full px-4 py-2 border border-black rounded-md bg-white focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>
          {/* Agrega los campos para seleccionar el laboratorio y la carrera */}
          <div>
            <label
              htmlFor="editLaboratoryId"
              className="block text-sm font-medium text-gray-700"
            >
              Laboratorio de Edición
            </label>
            <select
              value={editedReservation.laboratoryId}
              onChange={handleLaboratoryChange}
              id="editLaboratoryId"
              className="w-full px-4 py-2 border border-black rounded-md bg-white focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
            >
              {Array.isArray(laboratorios) && laboratorios.length > 0 ? (
                laboratorios.map((laboratory) => (
                  <option key={laboratory.id} value={laboratory.id}>
                    {laboratory.labName}
                  </option>
                ))
              ) : (
                <option value="">Cargando laboratorios...</option>
              )}
            </select>
          </div>
          <div>
            <label
              htmlFor="editCareerId"
              className="block text-sm font-medium text-gray-700"
            >
              Carrera de Edición
            </label>
            <select
              value={editedReservation.careerId}
              onChange={handleCareerChange}
              id="editCareerId"
              className="w-full px-4 py-2 border border-black rounded-md bg-white focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
            >
              {Array.isArray(carreras) && carreras.length > 0 ? (
                carreras.map((carrera) => (
                  <option key={carrera.id} value={carrera.id}>
                    {carrera.nombre}
                  </option>
                ))
              ) : (
                <option value="">Cargando carreras...</option>
              )}
            </select>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={validateAndSave}
          >
            Guardar
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              onCancel();
              setIsOpen(false);
            }}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditReservationModal;
