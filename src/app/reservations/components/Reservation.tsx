"use client";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  addReservation,
  ReservationFormData,
  Shift,
  getCareers,
  getLaboratories,
  Carrera,
  Laboratory,
} from "../utils/api";

function Reservations() {
  const { register, handleSubmit, reset } = useForm<ReservationFormData>();
  const [laboratorios, setLaboratorios] = useState<Laboratory[]>([]);
  const [carreras, setCarreras] = useState<Carrera[]>([]);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [defaultUserId] = useState<number>(1); // ID de usuario predeterminada

  useEffect(() => {
    // Obtener el token JWT (esto debe hacerse de manera segura)
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsIm5hbWUiOiJOb21icmUgZGUgVXN1YXJpbyIsImlhdCI6MTY5NDA0OTg5MSwiZXhwIjoxNjk0MDU3MDkxfQ.d9ywj8o5TZft7XWDhlwxGlAPOgtOtJF0Qaw4HL5IH8w"; // Reemplaza con tu token JWT real
    setAuthToken(token);

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

  const onSubmit: SubmitHandler<ReservationFormData> = async (data) => {
    try {
      if (authToken) {
        const reservationDataWithUserId = {
          ...data,
          userId: defaultUserId,
          careerId: Number(data.careerId),
          laboratoryId: Number(data.laboratoryId),
        };

        const newReservation = await addReservation(
          reservationDataWithUserId,
          authToken
        );

        if (newReservation) {
          console.log("Reserva agregada con éxito:", newReservation);
          reset();
        } else {
          console.error("No se pudo agregar la reserva");
        }
      } else {
        console.error("No se pudo obtener el token JWT");
      }
    } catch (error) {
      console.error("Error al agregar la reserva:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-6">Reservas</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Fecha
          </label>
          <input
            {...register("date")}
            type="date"
            id="date"
            className="w-full px-4 py-2 border border-black rounded-md bg-white focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="shift"
            className="block text-sm font-medium text-gray-700"
          >
            Turno
          </label>
          <select
            {...register("shift")} // Aquí se asigna Shift al campo "shift"
            id="shift"
            className="w-full px-4 py-2 border border-black rounded-md bg-white focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
          >
            <option value={Shift.morning}>Matutino</option>
            <option value={Shift.afternoon}>Vespertino</option>
            <option value={Shift.night}>Nocturno</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="startTime"
            className="block text-sm font-medium text-gray-700"
          >
            Hora de Inicio
          </label>
          <input
            {...register("startTime")}
            type="time"
            id="startTime"
            className="w-full px-4 py-2 border border-black rounded-md bg-white focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="endTime"
            className="block text-sm font-medium text-gray-700"
          >
            Hora de Finalización
          </label>
          <input
            {...register("endTime")}
            type="time"
            id="endTime"
            className="w-full px-4 py-2 border border-black rounded-md bg-white focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="laboratoryId"
            className="block text-sm font-medium text-gray-700"
          >
            Laboratorio
          </label>
          {Array.isArray(laboratorios) && laboratorios.length > 0 ? (
            <select
              {...register("laboratoryId")}
              id="laboratoryId"
              className="w-full px-4 py-2 border border-black rounded-md bg-white focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
            >
              {laboratorios.map((laboratory) => (
                <option key={laboratory.id} value={laboratory.id}>
                  {laboratory.labName}
                </option>
              ))}
            </select>
          ) : (
            <p>Cargando laboratorios...</p>
          )}
        </div>

        <div>
          <label
            htmlFor="careerId"
            className="block text-sm font-medium text-gray-700"
          >
            Carrera
          </label>
          {Array.isArray(carreras) && carreras.length > 0 ? (
            <select
              {...register("careerId")}
              id="careerId"
              className="w-full px-4 py-2 border border-black rounded-md bg-white focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
            >
              {carreras.map((carrera) => (
                <option key={carrera.id} value={carrera.id}>
                  {carrera.nombre}
                </option>
              ))}
            </select>
          ) : (
            <p>Cargando carreras...</p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            Agregar Reserva
          </button>
        </div>
      </form>
    </div>
  );
}

export default Reservations;
