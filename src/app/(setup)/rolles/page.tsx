"use client";
import TableRoles from "../../components/tables/table-roles";
import BtnAddRole from "@/app/components/roles/btn-add-role";
import { Role } from "@/app/interfaces/roles-interfaces";
import { useRoles } from "@/app/hooks/use-roles";
import { useEffect, useState } from "react";
import SearchRoles from "../../components/roles/search-roles";
import BtnFilterRoles from "@/app/components/roles/btn-filter-roles";
import useUtils from "@/app/hooks/use-utils";
import { set } from "react-hook-form";

function RolesPage() {
  const { onShowAll } = useRoles();
  const [roles, setRoles] = useState<Role[]>([]);
  const [search, setSearch] = useState<string>("");
  const [rolesSearch, setRolesSearch] = useState<Role[]>([]);
  const { getParams } = useUtils();

  useEffect(() => {
    const loadRoles = async () => {
      await onShowAll("").then(({ data }) => {
        setRolesAndSearch(data);
      });
    };

    loadRoles();
  }, []);

  const setRolesAndSearch = (data: Role[]) => {
    setRoles(() => {
      setRolesSearch(data);
      return data;
    });
  };

  const onSaved = async (rol: Role) => {
    const { data } = await onShowAll("");
    setRolesAndSearch(data);
  };

  const onDeleted = async (rol: Role) => {
    const { data } = await onShowAll("");
    setRolesAndSearch(data);
  };

  const onUpdated = async (rol: Role) => {
    const { data } = await onShowAll("");
    setRolesAndSearch(data);
  };

  const onSearch = (buscar: string) => {
    const rows = roles.filter((rol) => {
      const campo = rol.role.toUpperCase();
      const textSearch = buscar.toUpperCase();
      return campo.includes(textSearch);
    });
    setRolesSearch(rows);
  };

  const onFilteredRoles = async (fields: Role) => {
    // TODO: Obetener los parametros de busqueda
    const params = getParams(fields);
    console.log(params);

    // TODO: Filtrar los roles
    await onShowAll(params).then(({ data }) => {
      setRolesAndSearch(data);
    });
  };

  return (
    <div>
      <div className='min-h-screen'>
        <h1 className='mb-3'>Listado de roles</h1>

        <div className='flex justify-between mb-2'>
          <BtnFilterRoles
            onFilteredRoles={(value: Role) => {
              onFilteredRoles(value);
            }}
          />
          <SearchRoles
            search={search}
            setSearch={(e) => {
              setSearch(e);
              onSearch(e);
            }}
          />
          <BtnAddRole onSaved={onSaved} />
        </div>

        <TableRoles
          roles={rolesSearch}
          onDeleted={onDeleted}
          onUpdated={onUpdated}
        />
      </div>
    </div>
  );
}

export default RolesPage;
