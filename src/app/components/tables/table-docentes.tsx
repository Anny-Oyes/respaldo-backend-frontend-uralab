import { revalidatePath } from "next/cache";
import ButtonDeleteArea from "../forms/areas/button-delete-area";
import ButtonEditArea from "../forms/areas/button-edit-area";
import { getAllDocente } from "@/app/actions/post/save-docente";
import ButtonDeleteDocente from "../forms/docentes/button-delete-docentes";
import ButtonEditDocente from "../forms/docentes/button-edit-docentes";

const TableDocentes = async () => {
  revalidatePath("/docentes");
  const data = await getAllDocente();

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Nombre</th>
              <th className="px-6 py-3">Apellido</th>
              <th className="px-6 py-3">Fecha de Nacimiento</th>
              <th className="px-6 py-3">Config</th>
            </tr>
          </thead>
          <tbody className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            {Object.values(data).map((docente: any) => (
              <tr key={`registro-area-${docente.id}`}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{docente.id}</td>
                <td className="px-6 py-4"> {docente.nombre}</td>
                <td className="px-6 py-4"> {docente.apellido}</td>
                <td className="px-6 py-4"> {docente.fechaNacimiento}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-row items-center justify-end">
                    <ButtonDeleteDocente id={docente.id} />
                    <ButtonEditDocente id={docente.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TableDocentes;
