"use client";
import feching from "@/app/utils/cliente-http";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

interface ListModalidadesProps {
  selected: (e: number) => void;
}

type SWCharacter = {
  id: number;
  modalidad: string;
  isActive: boolean;
};

export default function ListModalidades({ selected }: ListModalidadesProps) {
  let list = useAsyncList<SWCharacter>({
    async load({ signal, filterText }) {
      const endPoind = `/catalogos/modalidades?buscar=${filterText}`;
      let res = await feching(endPoind, "no-store", "GET");

      return {
        items: res,
      };
    },
  });

  const changeModalidad = (e: any) => {
    selected(e);
  };

  return (
    <Autocomplete
      className='max-w-xs'
      inputValue={list.filterText}
      isLoading={list.isLoading}
      items={list.items}
      label='Seleccione una modalidad'
      placeholder='Escriba una modalidad...'
      variant='bordered'
      onInputChange={list.setFilterText}
      onSelectionChange={(e) => {
        changeModalidad(e);
        console.log(e);
      }}
    >
      {(item) => (
        <AutocompleteItem key={item.id} className='capitalize'>
          {item.modalidad}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}
