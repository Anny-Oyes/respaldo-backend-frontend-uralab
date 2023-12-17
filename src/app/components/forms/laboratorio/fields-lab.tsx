"use client";
import { useState } from "react";

export default function FieldsLab({ fields }: { fields: any }) {
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
        <label htmlFor="labName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Nombre del Laboratorio
        </label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="labName"
          id="labName"
          defaultValue={fields?.labName || ""}
          onChange={handlerChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Descripcion del laboratorio
        </label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="description"
          id="description"
          defaultValue={fields?.description || ""}
          onChange={handlerChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="fundation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Fecha en que fue fundado el laboratorio
        </label>
      </div>
      <div className="mb-6">
        <input
          type="date"
          name="fundation"
          id="fundation"
          defaultValue={fields?.fundation || ""}
          onChange={handlerChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="builder" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Nombre del ingeniero acargo
        </label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="builder"
          id="builder"
          defaultValue={fields?.builder || ""}
          onChange={handlerChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </>
  );
}
