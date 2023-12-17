'use client';
import feching from "@/app/utils/cliente-http";
import { useEffect, useState } from "react";
import SelectSearch from "../select/select";
import { useAsyncList } from "@react-stately/data";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

interface ListUsersProps {
  selected: (e: Object) => void;
}

type SWCharacter = {
  id: number;
  name: string;
};
export default  function ListUsers({ selected }: ListUsersProps) {
  let list = useAsyncList<SWCharacter>({
    async load({ signal, filterText }) {
      const endPoind = `/catalogos/users?buscar=${filterText}`;
      let res = await feching(endPoind, "no-store", "GET");

      return {
        items: res,
      };
    },
  });
  const changeUser = (e: any) => {
    selected(e);
  }
  return (
    <Autocomplete
      className="max-w-xs"
      inputValue={list.filterText}
      isLoading={list.isLoading}
      items={list.items}
      label="Seleccione un usuario"
      placeholder="Escriba un usuario..."
      variant="bordered"
      onInputChange={list.setFilterText}
      onSelectionChange={(e) => {
        changeUser(e);
      }}>
      {(item) => (
        <AutocompleteItem key={item.id} className="capitalize">
          {item.name}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}
