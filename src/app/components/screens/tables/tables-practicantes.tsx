import ButtonDeletePracticante from "../forms/practicante/button-delete-practicante";
import ButtonEditPracicante from "../forms/practicante/button-edit-practicante";
import Practicante from "../forms/practicante/interface/practicante";
interface TablePracticanteProps {
  onDeleted: (e: Practicante) => void;
  onUpdated: (e: Practicante) => void;
  practicante: Practicante[];
}
const TablePracticante = async (
  { practicante, onDeleted, onUpdated }: TablePracticanteProps
) => {
  const handlerOnDeleted = async (practicante: Practicante) => {
    onDeleted(practicante);
  };

  const handlerOnUpdate = async (practicante: Practicante) => {
    onUpdated(practicante);
  };

  
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Nombres</th>
              <th className="px-6 py-3">Apellidos</th>
              <th className="px-6 py-3">Carrera</th>
              <th className="px-6 py-3">Fecha_inicio</th>
              <th className="px-6 py-3">Fecha_fin</th>
              <th className="px-6 py-3">Cantidad_horas</th>
              <th className="px-6 py-3">config</th>
            </tr>
          </thead>
          <tbody className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            {Object.values(practicante).map((practicante: any) => (
              <tr key={`practicante-${practicante.id}`}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {practicante.id}
                </td>
                <td className="px-6 py-4"> {practicante.nombres}</td>
                <td className="px-6 py-4"> {practicante.apellidos}</td>
                <td className="px-6 py-4"> {practicante.carrera.nombre}</td>
                <td className="px-6 py-4"> {practicante.fecha_inicio}</td>
                <td className="px-6 py-4"> {practicante.fecha_fin}</td>
                <td className="px-6 py-4"> {practicante.cantidad_horas}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-row items-center justify-end">
                    <ButtonDeletePracticante onDeleted={async (e)=>{
                      await handlerOnDeleted(e);
                    }} 
                    id={practicante.id} />
                    <ButtonEditPracicante onSaved={
                      async (e)=>{
                        await handlerOnUpdate(e);
                      }
                    } id={practicante.id} />
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
export default TablePracticante;
