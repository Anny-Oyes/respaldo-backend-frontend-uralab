"use client";
import { useEffect, useState } from "react";
import { UsoLab } from "@/app/interfaces/usoLab-interfaces";

import { useLaboratorio } from "@/app/hooks/uso-lab";
import SearchUsoLab from "@/app/components/forms/usoLaboratorio/search-UsoLab";
import BtnAddUsoLab from "@/app/components/forms/usoLaboratorio/btn-add-usoLab";
import TableLabUse from "@/app/components/tables/table-labUse";
import useUtils from "@/app/hooks/use-utils";
import BtnFilterUsoLab from "./usoLaboratorio/btn-filter";


function LabUsePage() {
  const { onShowAll } = useLaboratorio();
  const [usoLaboratorio, setLaboratorio] = useState<UsoLab[]>([]);
  const [search, setSearch] = useState<string>("");
  const [usoLabSearch, setUsoLabSearch] = useState<UsoLab[]>([]);
  const { getParams } = useUtils();

  useEffect(() => {
    const loadUsoLab = async () => {
      await onShowAll(0).then(({ data }) => {
        setLaboratorio(() => {
          setUsoLabSearch(data);
          return data;
        });
      });
    };

    loadUsoLab();
  }, []);

  const setUsoLabAndSearch = (data: UsoLab[]) => {
    setLaboratorio(() => {
      setUsoLabSearch(data);
      return data;
    });
  };

  const onSaved = async (rol: UsoLab) => {
    const { data } = await onShowAll(0);
    setUsoLabAndSearch(data);
  };

  const onDeleted = async (rol: UsoLab) => {
    const { data } = await onShowAll(0);
    setUsoLabAndSearch(data);
  };

  const onUpdated = async (rol: UsoLab) => {
    const { data } = await onShowAll(0);
    setUsoLabAndSearch(data);
  };

  const onSearch = (buscar: string) => {
    const rows = usoLaboratorio.filter((usoLab) => {
      const campo = usoLab.className.nombre.toUpperCase();
      const textSearch = buscar.toUpperCase();
      return campo.includes(textSearch);
    });
    setUsoLabSearch(rows);
  };

  const onFilteredUsoLab = async (fields: UsoLab) => {
    // TODO: Obetener los parametros de busqueda
    const params: any = getParams(fields);
    console.log(params);

    // TODO: Filtrar los roles
    await onShowAll(params).then(({ data }) => {
      setUsoLabAndSearch(data);
    });
  };

  return (
    <div>
      <div className="min-h-screen">
      <h1 className="mb-6 text-3xl font-bold text-center">Listado de registros de uso del laboratorio</h1>



        <div className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded-md">
  <div className="flex items-center space-x-2">
    <BtnFilterUsoLab
      onFilteredLabUse={(value: UsoLab) => {
        onFilteredUsoLab(value);
      }}
    />
    <SearchUsoLab
      search={search}
      setSearch={(e) => {
        setSearch(e);
        onSearch(e);
      }}
    />
  </div>
  <BtnAddUsoLab onSavedUsoLab={onSaved} />
</div>



        <TableLabUse
          usoLaboratorio={usoLabSearch}
          onDeleted={onDeleted}
          onUpdated={onUpdated}
        />
      </div>
    </div>
  );
}

export default LabUsePage;