"use client";
import TableAreas from "@/app/components/tables/table-areas";
import BtnAddArea from "@/app/components/areas/btn-add-area";
import { Area } from "@/app/interfaces/areas-interfaces";
import { useAreas } from "@/app/hooks/use-area";
import { useEffect, useState } from "react";
import SearchAreas from "@/app/components/areas/search-areas";
import BtnFilterAreas from "@/app/components/areas/btn-filter-areas";
import useUtils from "@/app/hooks/use-utils";

function AreasPage() {
  const { onShowAll } = useAreas();
  const [areas, setAreas] = useState<Area[]>([]);
  const [search, setSearch] = useState<string>("");
  const [areasSearch, setAreasSearch] = useState<Area[]>([]);
  const { getParams } = useUtils();

  useEffect(() => {
    const loadAreas = async () => {
      await onShowAll("").then(({ data }) => {
          setAreasAndSearch(data);
      });
    };

    loadAreas();
  }, []);

  const setAreasAndSearch = (data: Area[]) => {
    setAreas(() => {
      setAreasSearch(data);
      return data;
    });
  };

  const onSaved = async (area: Area) => {
    const { data } = await onShowAll("");
    setAreasAndSearch(data);
  };

  const onDeleted = async (area: Area) => {
    const { data } = await onShowAll("");
    setAreasAndSearch(data);
  };

  const onUpdated = async (rol: Area) => {
    const { data } = await onShowAll("");
    setAreasAndSearch(data);
    
  };

  const onSearch = (buscar: string) => {
    const rows = areas.filter((area) => {
      const campo = area.nombre.toUpperCase();
      const textSearch = buscar.toUpperCase();
      return campo.includes(textSearch);
    });
    setAreasSearch(rows);
    
  };

  const onFilteredAreas = async (fields: Area) => {
    // TODO: Obetener los parametros de busqueda
    const params = getParams(fields);

    // TODO: Filtrar las areas
    await onShowAll(params).then(({ data }) => {
      setAreasAndSearch(data);
    });
  };

  return (
    <div>
      <div className="min-h-screen">
        <h1 className="mb-3">Listado de Areas</h1>

        <div className="flex justify-between mb-2">
          <BtnFilterAreas
            onFilteredAreas={(value: Area) => {
              onFilteredAreas(value);
            }}
          />
          <SearchAreas
            search={search}
            setSearch={(e) => {
              setSearch(e);
              onSearch(e);
            }}
            
          />
          <BtnAddArea onSaved={onSaved} />
        </div>

        <TableAreas
          areas={areasSearch}
          onDeleted={onDeleted}
          onUpdated={onUpdated}
        />
      </div>
    </div>
  );
}

export default AreasPage;
