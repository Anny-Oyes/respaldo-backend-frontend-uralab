"use client";
import feching from "@/app/utils/cliente-http";
import SelectSearch from "../select/select";
import { useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

interface ListDocenteProps {
  selected: (e: number) => void;
}

type SWCharacter = {
 
  id: number;
  nombre: string;
  
};
export default function ListDocente({ selected }: ListDocenteProps) {
  let list = useAsyncList<SWCharacter>({
    async load({ signal, filterText }) {
      const endPoind = `/catalogos/docentes?buscar=${filterText}`;
      let res = await feching(endPoind, "no-store", "GET");

      return {
        items: res,
      };
    },
  });

  const changeDocente = (e: any) => {
    selected(e);
  };

  return (
    <Autocomplete
      className='max-w-xs'
      inputValue={list.filterText}
      isLoading={list.isLoading}
      items={list.items}
      label='Seleccione un docente'
      placeholder='Escriba un docente...'
      variant='bordered'
      onInputChange={list.setFilterText}
      onSelectionChange={(e) => {
        changeDocente(e);
      }}
    >
      {(item) => (
        <AutocompleteItem key={item.id} className='capitalize'>
          {item.nombre}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}

