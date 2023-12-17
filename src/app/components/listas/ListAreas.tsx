//------------------- Listas despegables-------------------
// import feching from "@/app/utils/cliente-http";

// export default async function ListAreas() {
//   const getAllAreas = async () => {
//     const endPoind = `/catalogos/areas`;
//     const areas = await feching(endPoind, "no-store", "GET");
//     return areas;
//   };

//   const dataRoles = await getAllAreas();
//   return (
//     <div className="my-8">
//     <h1>Lista de Areas</h1>
//     <select
//     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//     >
//       {dataRoles.map((area: any) => {
//         return <option key={`area-${area.id}`}>{area.nombre}</option>;
//       })}
//     </select>
//     </div>
//   );
// }
// ----------------Listas de busqueda y despliegue-----------------------
// "use client";
// import feching from "@/app/utils/cliente-http";
// import SelectSearch from "../select/select";
// import { useEffect, useState } from "react";

// interface ListAreasProps {
//   selected: (e: Object) => void;
// }

// export default function ListAreas({ selected }: ListAreasProps) {
//   const [areas, setAreas] = useState([]);

//   const changeArea = (e: any) => {
//     selected(e);
//   };

//   const searchData = async (buscar = "") => {
//     const endPoind = `/catalogos/areas?buscar=${buscar}`;
//     const datos = await feching(endPoind, "no-store", "GET");
//     setAreas(datos);
//   };

//   useEffect(() => {
//     searchData("");
//   }, []);

//   return (
//     <SelectSearch
//       items={areas}
//       selectedItem={changeArea}
//       label="nombre"
//       placeholder="Buscar Areas"
//       search={searchData}
//     />
//   );
// }

// ------------------Nuevas listas de busqueda y despliegue--------------------

"use client";
import feching from "@/app/utils/cliente-http";
import SelectSearch from "../select/select";
import { useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

interface ListAreasProps {
  selected: (e: Object) => void;
}

type SWCharacter = {
  isActive: boolean;
  id: number;
  nombre: string;
  delete_at: string;
};
export default function Listas({ selected }: ListAreasProps) {
  let list = useAsyncList<SWCharacter>({
    async load({ signal, filterText }) {
      const endPoind = `/catalogos/areas?buscar=${filterText}`;
      let res = await feching(endPoind, "no-store", "GET");

      return {
        items: res,
      };
    },
  });

  const changeArea = (e: any) => {
    selected(e);
  };

  return (
    <Autocomplete
      className="max-w-xs"
      inputValue={list.filterText}
      isLoading={list.isLoading}
      items={list.items}
      label="Seleccione un area"
      placeholder="Escriba un area..."
      variant="bordered"
      onInputChange={list.setFilterText}
      onSelectionChange={(e) => {
        changeArea(e);
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

