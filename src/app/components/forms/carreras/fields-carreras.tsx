"use client";
import { useState } from "react";

interface Area {
  id: number;
  nombre: string;
}

export default function FieldsCarreras({ fields, areas }: { fields: any; areas: Area[] }) {
  const [field, setField] = useState(fields);

  const handlerChange = (e: any) => {
    const { name, value } = e.target;

    setField({
      ...field,
      [name]: value,
    });
  };

  return (
    <>
      <input type="hidden" id="id" name="id" defaultValue={fields?.id || ""} />

      <div>
        <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Nombre de la carrera
        </label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="nombre"
          id="nombre"
          defaultValue={fields?.nombre || ""}
          onChange={handlerChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="area" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Area
        </label>
      </div>
      <div className="mb-6">
        <select
          id="area"
          name="area"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {areas.map((areas) => (
            <option value={areas.id} key={areas.id}>
              {areas.nombre}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
