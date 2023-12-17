import { revalidatePath } from "next/cache";
import { getAllLabs } from "@/app/actions/post/save-lab";
import ButtonDeleteLab from "../forms/laboratorio/button-delete-lab";
import ButtonEditLab from "../forms/laboratorio/button-edit-lab";

const TableLab = async () => {
  revalidatePath("/labregister");
  const data = await getAllLabs();

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Nombre del laboratorio</th>
              <th className="px-6 py-3">Descripcion</th>
              <th className="px-6 py-3">Fecha de fundacion</th>
              <th className="px-6 py-3">Nombre del ingeniero encargado</th>
              <th className="px-6 py-3">Config</th>
            </tr>
          </thead>
          <tbody className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            {Object.values(data).map((labregister: any) => (
              <tr key={`registro-area-${labregister.id}`}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{labregister.id}</td>
                <td className="px-6 py-4"> {labregister.labName}</td>
                <td className="px-6 py-4"> {labregister.description}</td>
                <td className="px-6 py-4"> {labregister.fundation}</td>
                <td className="px-6 py-4"> {labregister.builder}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-row items-center justify-end">
                    <ButtonDeleteLab id={labregister.id} />
                    <ButtonEditLab id={labregister.id} />
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
export default TableLab;
