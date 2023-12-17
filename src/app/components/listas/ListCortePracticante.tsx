
"use client";
import feching from "@/app/utils/cliente-http";
import SelectSearch from "../select/select";
import { useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

interface ListFechaCorteProps {
    selected: (e: number) => void;
}

type SWCharacter = {
    id: number;
    fecha_corte: string;
};
export default function ListFechaCorte({ selected }: ListFechaCorteProps) {
    let list = useAsyncList<SWCharacter>({
        async load({ signal, filterText }) {
            const endPoind = `/catalogos/corte-practicas?buscar=${filterText}`;
            let res = await feching(endPoind, "no-store", "GET");

            return {
                items: res,
            };
        },
    });

    const changeFechaCorte = (e: any) => {
        selected(e);
    };

    return (
        <Autocomplete
            className="max-w-xs"
            inputValue={list.filterText}
            isLoading={list.isLoading}
            items={list.items}
            label="Seleccione a un Fecha de Corte"
            placeholder="Escriba una Fecha de Corte"
            variant="bordered"
            onInputChange={list.setFilterText}
            onSelectionChange={(e) => {
                changeFechaCorte(e);
            }}
        >
            {(item) => (
                <AutocompleteItem key={item.id} className="capitalize">
                    {item.fecha_corte}
                </AutocompleteItem>
            )}
        </Autocomplete>
    );
}



