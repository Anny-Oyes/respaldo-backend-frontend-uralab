
"use client";
import feching from "@/app/utils/cliente-http";
import { useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Role } from "@/app/interfaces/roles-interfaces";
import { UsoLab } from "@/app/interfaces/usoLab-interfaces";

interface ListUsoLabsProps {
  selected: (e: number) => void;
  datos: UsoLab;
}
export default function ListUsoLab({ selected, datos }: ListUsoLabsProps) {
  const [usoLab, setUsoLab] = useState<UsoLab[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSearch = async (search: string) => {
    try {
      const endPoind = `/catalogos/uselab?buscar=${search}`;
      setLoading(true);
      let res = await feching(endPoind, "no-store", "GET");
      if (typeof res === "object" && res.hasOwnProperty("data")) {
        const data = res.data;
        if (Object.values(data)) {
          setUsoLab(() => {
            setLoading(false);
            return [...data];
          });
        } else {
          console.error("'data' is not an array:", data);
          setLoading(false);
        }
      } else {
        console.error("Invalid response format:", res);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    const callLoadData = async () => {
      await onSearch("");
      if(datos && datos.docente) {
      setSearch(datos.docente);
    };
  }
    callLoadData();
  }, []);


  const changeUsoLab = (e: any) => {
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
      items={usoLab}
      label="Seleccione un docente"
      placeholder="Escriba un docente..."
      variant="bordered"
      onInputChange={async (e) => {
        await onChangeSelect(e);
      }}
      onSelectionChange={(e) => {
        console.log("escribiendo", e);

        changeUsoLab(e);
      }}
    >
      {usoLab.map((item, index) => (
        <AutocompleteItem key={index} className="capitalize">
          {item.docente}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}
