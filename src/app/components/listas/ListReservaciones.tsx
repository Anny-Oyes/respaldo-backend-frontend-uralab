"use client";
import React, { useEffect, useState } from "react";
import feching from "@/app/utils/cliente-http";
import SelectSearch from "../select/select";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

interface ListReservationsProps {
  selected: (e: Object) => void;
}

type Reservation = {
  startTime: string;
  id: number;
  isActive: boolean;
  delete_at: string;
};

export default function ListReservations({ selected }: ListReservationsProps) {
  let list = useAsyncList<Reservation>({
    async load({ signal, filterText }) {
      try {
        const endPoint = `/reservations?buscar=${filterText}`;
        const response = await feching(endPoint, "no-store", "GET");

        if (response && response.data && Array.isArray(response.data)) {
          return {
            items: response.data,
          };
        } else {
          return {
            items: [],
          };
        }
      } catch (error) {
        console.error("Error fetching reservations:", error);
        return {
          items: [],
        };
      }
    },
  });

  const changeReservation = (e: any) => {
    selected(e);
  };

  return (
    <Autocomplete
      className="max-w-xs"
      inputValue={list.filterText}
      isLoading={list.isLoading}
      items={list.items}
      label="Seleccione una reserva"
      placeholder="Escriba una reserva..."
      variant="bordered"
      onInputChange={list.setFilterText}
      onSelectionChange={(e) => {
        changeReservation(e);
      }}
    >
      {(item) => (
        <AutocompleteItem key={item.id} className="capitalize">
          {item.startTime}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}
