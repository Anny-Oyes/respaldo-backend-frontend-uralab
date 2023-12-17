import { revalidatePath } from "next/cache";
// import { getAllAreas as getAllAreas } from "@/app/actions/post/save-areas";
import ButtonEditCarrera from "../forms/carreras/button-edit-carrera";
import { getAllCarreras } from "@/app/actions/post/save-carreras";
import ButtonDeletecarrera from "../forms/carreras/button-delete-carrera";

const TableCarreras = async () => {
  revalidatePath("/registro-carreras");
  const data = await getAllCarreras();

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Carrera</th>
              <th className="px-6 py-3">Area</th>
              <th className="px-6 py-3">Opciones</th>
            </tr>
          </thead>
          <tbody className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            {Object.values(data).map((carrera: any) => (
              <tr key={`registro-area-${carrera.id}`}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{carrera.id}</td>
                <td className="px-6 py-4"> {carrera.nombre}</td>
                <td className="px-6 py-4"> {carrera.area.nombre}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-row items-center justify-end">
                    <ButtonDeletecarrera id={carrera.id} />
                    <ButtonEditCarrera id={carrera.id} />
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
export default TableCarreras;
