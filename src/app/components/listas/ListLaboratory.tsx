"use client";
import feching from "@/app/utils/cliente-http";
import SelectSearch from "../select/select";
import { useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

interface ListLabProps {
    selected: (e: number) => void;
}

type SWCharacter = {
    id: number;
    nombre: string;
};
export default function ListLab({ selected }: ListLabProps) {
    let list = useAsyncList<SWCharacter>({
        async load({ signal, filterText }) {
            const endPoind = `/catalogos/labregister?buscar=${filterText}`;
            let res = await feching(endPoind, "no-store", "GET");

            return {
                items: res,
            };
        },
    });

    const changeLab = (e: any) => {
        selected(e);
    };

    return (
        <Autocomplete
            className="max-w-xs"
            inputValue={list.filterText}
            isLoading={list.isLoading}
            items={list.items}
            label="Seleccione un laboratorio"
            placeholder="Escriba el nombre de un laboratorio"
            variant="bordered"
            onInputChange={list.setFilterText}
            onSelectionChange={(e) => {
                changeLab(e);
            }}
        >
            {(item) => (
                <AutocompleteItem key={item.id} className="capitalize">
                    {item.nombre}
                </AutocompleteItem>
            )}
        </Autocomplete>
    );
}

