"use client";

import FormModalidades from "@/app/components/forms/modalidades/form-modalidades";
import TablesModalidades from "../../components/tables/tables-modalidades";
import useModalidades from "@/app/hooks/use-modalidades";
import { useEffect, useState } from "react";
import { Modalidades } from "@/app/interfaces/modalidades-interface";
import useUtils from "@/app/hooks/use-utils";
import { set } from "react-hook-form";
import SearchModalidades from "@/app/components/modalidades/search-modalidades";
import BtnAddModalidades from "@/app/components/modalidades/btn-add-modalidades";
import BtnFilterModalidades from "@/app/components/modalidades/btn-filter-modalidad";

export default function ModalidadesPage() {
  const { onShowAll } = useModalidades();
  const [modalidades, setModalidades] = useState<Modalidades[]>([]);
  const [search, setSearch] = useState<string>("");
  const [modalidadesSearch, setModalidadesSearch] = useState<Modalidades[]>([]);
  const { getParams } = useUtils();

  useEffect(() => {
    const loadModalidades = async () => {
      await onShowAll("").then(({ data }) => {
        setModalidadesAndSearch(data);
        console.log(data);
      });
    };
    loadModalidades();
  }, []);

  const setModalidadesAndSearch = (data: Modalidades[]) => {
    setModalidades(() => {
      setModalidadesSearch(data);
      return data;
    });
    console.log(data);
  };

  const onSaved = async (modalidad: Modalidades) => {
    const { data } = await onShowAll("");
    setModalidadesAndSearch(data);
  };

  const onDeleted = async (modalidad: Modalidades) => {
    const { data } = await onShowAll("");
    setModalidadesAndSearch(data);
  };

  const onUpdated = async (modalidad: Modalidades) => {
    const { data } = await onShowAll("");
    setModalidadesAndSearch(data);
  };

  const onSearch = (buscar: string) => {
    const rows = modalidades.filter((modalidad) => {
      const campo = modalidad.modalidad.toUpperCase();
      const textSearch = buscar.toUpperCase();
      return campo.includes(textSearch);
    });
    setModalidadesSearch(rows);
  };

  const onFilteredModalidades = async (fields: Modalidades) => {
    const params = getParams(fields);

    await onShowAll(params).then(({ data }) => {
      setModalidadesAndSearch(data);
    });
  };
  return (
    <div>
      <div className='min-h-screen'>
        <h1 className='mb-3'>Listado de modalidades</h1>
        <div className='flex justify-between mb-2'>
          <BtnFilterModalidades
            onFilteredModalidades={(value: Modalidades) => {
              onFilteredModalidades(value);
            }}
          />

          <SearchModalidades
            search={search}
            setSearch={(e) => {
              setSearch(e);
              onSearch(e);
            }}
          />

          <BtnAddModalidades onSaved={onSaved} />
        </div>
        <TablesModalidades
          modalidades={modalidadesSearch}
          onDeleted={onDeleted}
          onUpdated={onUpdated}
        />
      </div>
    </div>
  );
}
