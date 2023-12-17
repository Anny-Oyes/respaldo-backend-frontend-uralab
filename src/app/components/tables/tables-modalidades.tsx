import { revalidatePath } from "next/cache";
import { getAllModalidades } from "../screens/actions/post/save-modalidades";
import ButtonDeleteModalidades from "../forms/modalidades/button-delete-modalidades";
import ButtonEditModalidades from "../forms/modalidades/button-edit-modalidades";
import Link from "next/link";
import { IconTrashFilled } from "@tabler/icons-react";
import { Modalidades } from "@/app/interfaces/modalidades-interface";

interface TableModalidadesProps {
  onDeleted: (e: any) => void;
  onUpdated: (e: any) => void;
  modalidades: Modalidades[];
}

const TablesModalidades = async ({
  modalidades,
  onDeleted,
  onUpdated,
}: TableModalidadesProps) => {
  const handlerOnDeleted = async (modalidad: Modalidades) => {
    onDeleted(modalidad);
  };

  const handlerOnUpdate = async (modalidad: Modalidades) => {
    onUpdated(modalidad);
  };
  console.log(handlerOnUpdate);
  return (
    <div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th className='px-6 py-3'>ID</th>
              <th className='px-6 py-3'>Modalidades</th>
              <th className='px-6 py-3'>Config</th>
            </tr>
          </thead>
          <tbody className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
            {Object.values(modalidades).map((modalidades: any) => (
              <tr key={`modalidades-${modalidades.id}`}>
                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {modalidades.id}
                </td>
                <td className='px-6 py-4'> {modalidades.modalidad}</td>

                <td className='px-6 py-4'>
                  <div className='flex flex-row items-center justify-end'>
                    <ButtonDeleteModalidades
                      onDeleted={async (e) => {
                        alert("eliminado");
                        await handlerOnDeleted(e);
                      }}
                      id={modalidades.id}
                    />
                    <ButtonEditModalidades
                      onSaved={async (e) => {
                        await handlerOnUpdate(e);
                      }}
                      id={modalidades.id}
                    />
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
export default TablesModalidades;
