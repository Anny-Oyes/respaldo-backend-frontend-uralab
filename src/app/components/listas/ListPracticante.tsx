"use client";
import feching from "@/app/utils/cliente-http";
import { useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { ListPracticante } from "@/app/interfaces/ListPracticante-interfaces";

interface ListPracticanteProps {
    selected: (e: number) => void;
    datos: ListPracticante;
}
export default function ListPracticante({ selected, datos }: ListPracticanteProps) {
    const [practicante, setpracticante] = useState<ListPracticante[]>([]);
    const [search, setSearch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    // funcion para buscar los practicante
    const onSearch = async (search: string) => {
        // Buscar los practicante
        const endPoind = `/catalogos/practicante?buscar=${search}`;
        setLoading(true);
        let res = await feching(endPoind, "no-store", "GET");
        setpracticante(() => {
            setLoading(false);
            return [...res];
        });
    };

    // cargar los practicante
    useEffect(() => {
        const callLoadData = async () => {
            await onSearch("");
            // todo: buscar el role
            setSearch(datos.nombres);
        };

        callLoadData();
    }, []);

    const changePracticante = (e: any) => {
        selected(e);
    };

    const onChangeSelect = async (e: any) => {
        setSearch(e);
        setTimeout(async () => {
            await onSearch(e);
        }, 200);
    };

    // probando git

    return (
        <Autocomplete
            className="max-w-xs"
            inputValue={search}
            isLoading={loading}
            items={practicante}
            label="Seleccione un practicante"
            placeholder="Escriba un practicante..."
            variant="bordered"
            onInputChange={async (e) => {
                await onChangeSelect(e);
            }}
            onSelectionChange={(e) => {
                console.log("escribiendo", e);

                changePracticante(e);
            }}
        >
            {(item) => (
                <AutocompleteItem key={item.id} className="capitalize">
                    {`${item.nombres} ${item.apellidos}`}
                </AutocompleteItem>
            )}
        </Autocomplete>
    );
}

