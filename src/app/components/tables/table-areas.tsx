import ButtonDeleteArea from "../forms/areas/button-delete-area";
import ButtonEditArea from "../forms/areas/button-edit-area";

import {Area} from "@/app/interfaces/areas-interfaces";

interface TableAreasProps {
  onDeleted: (e: Area) => void;
  onUpdated: (e: Area) => void;
  areas: Area[];
}

const TableAreas = async ({areas, onDeleted, onUpdated}: TableAreasProps) => {
  const handlerOnDeleted = async (area: Area) => {
    onDeleted(area);
  };

  const handlerOnUpdate = async (area: Area) => {
    onUpdated(area);
  };
  return (
    <div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-center">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Area</th>
            {/* <th className="px-6 py-3">Activo</th> */}
            <th className="px-6 py-3">Config</th>
          </tr>
        </thead>
        <tbody className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          {Object.values(areas).map((area: any) => (
            <tr key={`registro-area-${area.id}`}>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {area.id}
              </td>
              <td className="px-6 py-4"> {area.nombre}</td>
              <td className="px-6 py-4">
                <div className="flex flex-row items-center justify-end">
                  <ButtonDeleteArea
                    onDeleted={async (e) => {
                      await handlerOnDeleted(e);
                    }}
                    id={area.id}
                  />
                  <ButtonEditArea
                    onSaved={async (e) => {
                      await handlerOnUpdate(e);
                    }}
                    id={area.id}
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
export default TableAreas;
