import { setterData } from "@/app/interfaces/setter-interfaces";
import { UsoLab } from "@/app/interfaces/usoLab-interfaces";
import { useEffect, useState } from "react";
import {  getAllDocentes} from "../../../(setup)/laboratory-use/../../(setup)/laboratory-use/actions/post/save-labUse";

interface FieldsUsoLabProps {
  usoLaboratorio?: UsoLab;
  onChangeUsoLab: (data: setterData) => void;
}
export default function FieldsUsoLabModal(
  { usoLaboratorio, onChangeUsoLab }: FieldsUsoLabProps = {
    usoLaboratorio: {} as UsoLab,
    onChangeUsoLab: () => {},
  }
) {
  const [fields, setFields] = useState<UsoLab>({} as UsoLab);
  const handleChangeUsoLab = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    onChangeUsoLab({ clave, valor });
  };

  useEffect(() => {
    if (usoLaboratorio) {
      setFields(usoLaboratorio || ({} as UsoLab));
    }
  }, [usoLaboratorio]);


  const [docentes, setDocentes] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const docentesData = await getAllDocentes();
        setDocentes(docentesData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <div className="mb-6">
            <div>
              <label htmlFor="className" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Docente</label>
            </div>
            <select
          name="docente"
          id="docente"
          value={fields?.docente?.id }
          onChange={(e) => {
            const data: setterData = {
              clave: e.target.name,
              valor: e.target.value,
            };
            handleChangeUsoLab(data);
          }}
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-900"
        >
          <option value="docente" >
            Seleccionar docente
          </option>
          {docentes.map((docente: any) => (
            <option key={docente.id} value={docente.id}  >
              {docente.nombre} {docente.apellido}
            </option>
          ))}
        </select>
          </div>
    </div>
  );
}
