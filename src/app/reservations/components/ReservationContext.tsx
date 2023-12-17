import React, { createContext, useContext, useState, ReactNode } from "react";
import { Reservation, ReservationFormData } from "../utils/api";

// Define la interfaz para el contexto
interface ReservationsContextType {
  reservations: Reservation[];
  setReservations: React.Dispatch<React.SetStateAction<Reservation[]>>;
  addReservation: (reservation: Reservation) => void;
}

// Crea el contexto de las reservaciones
export const ReservationsContext = createContext<
  ReservationsContextType | undefined
>(undefined);

// Props para el proveedor de contexto
interface ReservationsProviderProps {
  children: ReactNode;
}

export function useReservations() {
  const context = useContext(ReservationsContext);
  if (context === undefined) {
    throw new Error(
      "useReservations debe ser usado dentro de un ReservationsProvider"
    );
  }
  return context;
}

// Proveedor de contexto para las reservaciones
export function ReservationsProvider({ children }: ReservationsProviderProps) {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  const addReservation = (reservation: Reservation) => {
    // Agrega la nueva reserva al estado de las reservas
    setReservations((prevReservations) => [...prevReservations, reservation]);
  };

  return (
    <ReservationsContext.Provider
      value={{ reservations, setReservations, addReservation }}
    >
      {children}
    </ReservationsContext.Provider>
  );
}
