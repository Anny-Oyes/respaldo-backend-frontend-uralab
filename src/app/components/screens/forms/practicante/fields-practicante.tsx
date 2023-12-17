import { useEffect, useState } from "react";
import Practicante from "./interface/practicante";
import { Input, Select } from "@nextui-org/react";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { getAllCarreras } from "@/app/actions/post/save-carreras";
interface FieldsPracticanteProps {
  practicante?: Practicante;
  onChangePracticante: (data: setterData) => void;
}
export default function FieldsPracticantes(
  { practicante, onChangePracticante }: FieldsPracticanteProps = {
    practicante: {} as Practicante,
    onChangePracticante: (data: setterData) => {},
  }
) {
  const [fields, setFields] = useState<Practicante>({} as Practicante);

  const handleChangePracticante = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    onChangePracticante({ clave, valor });
  };// aqui se hace el cambio de los datos del practicante
  useEffect(() => {
    if (practicante) {
      setFields(practicante || ({} as Practicante));
    }
  }, [practicante]);// este es el use effect que se encarga de actualizar los datos del practicante

  const [carrera, setCarrera] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCarreras();
        setCarrera(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col gap-1">
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Nombres
            </label>
            <Input
              size="sm"
              type="text"
              label="Nombres"
              placeholder="Nombres del practicante"
              defaultValue={practicante?.nombres}
              onChange={(e) => {
                const data: setterData = {
                  clave: "nombres",
                  valor: e.target.value,
                };
                handleChangePracticante(data);
              }}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Apellidos
            </label>
            <Input
              size="sm"
              type="text"
              label="Apellidos"
              placeholder="Apellidos del practicante"
              defaultValue={practicante?.apellidos}
              onChange={(e) => {
                const data: setterData = {
                  clave: "apellidos",
                  valor: e.target.value,
                };
                handleChangePracticante(data);
              }}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Fecha inicio
            </label>
            <Input
              size="sm"
              type="date"
              label="Fecha inicio"
              placeholder="Fecha inicio del practicante"
              defaultValue={practicante?.fecha_inicio}
              onChange={(e) => {
                const data: setterData = {
                  clave: "fecha_inicio",
                  valor: e.target.value,
                };
                handleChangePracticante(data);
              }}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Fecha fin
            </label>
            <Input
              size="sm"
              type="date"
              label="Fecha fin"
              placeholder="Fecha inicio del practicante"
              defaultValue={practicante?.fecha_fin}
              onChange={(e) => {
                const data: setterData = {
                  clave: "fecha_fin",
                  valor: e.target.value,
                };
                handleChangePracticante(data);
              }}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Carrera
            </label>
            <select
              id="carreraId"
              name="carreraId"
              className="appearance-none block w-full bg-[#27272A] text-gray-100 border-0  rounded-small py-4 px-4 mb-3 leading-tight hover:bg-[#3F3F46] focus:bg-[#3F3F46] focus:outline-none"
              onChange={(e) => {
                const data: setterData = {
                  clave: "carreraId",
                  valor: parseInt(e.target.value, 10) || 0,
                };
                handleChangePracticante(data);
              }}
            >
              <option value="">Seleccione una carrera</option>
              {carrera &&
                carrera.map((carrera: any) => (
                  <option key={carrera.id} value={carrera.id}>
                    {carrera.nombre}
                  </option>
                ))}
            </select>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Cantidad de horas
            </label>
            <input
              type="number"
              name="cantidad_horas"
              className="appearance-none block w-full bg-[#27272A] text-gray-100 border-0 rounded-small py-4 px-4 mb-3 leading-tight hover:bg-[#3F3F46] focus:bg-[#3F3F46] focus:outline-none"
              id="cantidad_horas"
              placeholder="Cantidad de horas del practicante"
              defaultValue={practicante?.cantidad_horas ||0}
              onChange={(e) => {
                const data: setterData = {
                  clave: e.target.name,                  
                  valor: parseInt(e.target.value, 10) || 0,
                };
                handleChangePracticante(data);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
