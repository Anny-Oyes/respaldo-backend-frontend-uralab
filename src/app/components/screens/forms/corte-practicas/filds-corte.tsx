import { setterData } from "@/app/interfaces/setter-interfaces";
import CortePracticas from "./interface/corte-practicas";
import { useEffect, useState } from "react";
import { getPracticantes } from "../../actions/post/save-practicantes";

interface FieldsCortePracticasProps {
  cortePracticas?: CortePracticas;
  onChangeCortePracticas: (data: setterData) => void;
}
export default function FieldsCortePracticas(
  {cortePracticas, onChangeCortePracticas}: FieldsCortePracticasProps 
){ 

  const [fields, setFields] = useState<CortePracticas>({} as CortePracticas);

  const handleChangeCortePracticas = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    onChangeCortePracticas({ clave, valor });
  };

  useEffect(() => {
    if (cortePracticas) {
      setFields(cortePracticas || ({} as CortePracticas));
    }
  },[cortePracticas]);

  const [practicante, setPracticante] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPracticantes();
        setPracticante(data);
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
              Fecha Corte
            </label>
            <input
              type="date"
              className="appearance-none block w-full bg-[#27272A] text-gray-100 border-0  rounded-small py-4 px-4 mb-3 leading-tight hover:bg-[#3F3F46] focus:bg-[#3F3F46] focus:outline-none"
              placeholder="Fecha Corte"
              defaultValue={cortePracticas?.fecha_corte}
              onChange={(e) => {
                const data: setterData = {
                  clave: "fecha_corte",
                  valor: e.target.value,
                };
                handleChangeCortePracticas(data);
              }}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Practicante
            </label>
            <select
            id="practicante"
            name="practicante"
              className="appearance-none block w-full bg-[#27272A] text-gray-100 border-0  rounded-small py-4 px-4 mb-3 leading-tight hover:bg-[#3F3F46] focus:bg-[#3F3F46] focus:outline-none"
              onChange={(e) => {
                const data: setterData = {
                  clave: "practicante",
                  valor: e.target.value,
                };
                handleChangeCortePracticas(data);
              }}
            >
              <option value="">Seleccione un practicante</option>
              {practicante.map((practicante: any) => (
                <option key={practicante.id} value={practicante.id}>
                  {practicante.nombres}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Horas Actuales
            </label>
            <input
              type="number"
              name="horas_actuales"
              className="appearance-none block w-full bg-[#27272A] text-gray-100 border-0  rounded-small py-4 px-4 mb-3 leading-tight hover:bg-[#3F3F46] focus:bg-[#3F3F46] focus:outline-none"
              defaultValue={cortePracticas?.horas_actuales||0}
              onChange={(e) => {
                const data: setterData = {
                  clave: e.target.name,
                  valor: parseInt(e.target.value, 10) || 0,
                };
                handleChangeCortePracticas(data);
              }}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Horas Anteriores 
            </label>
            <input
              type="number"
              name="horas_anteriores"
              className="appearance-none block w-full bg-[#27272A] text-gray-100 border-0  rounded-small py-4 px-4 mb-3 leading-tight hover:bg-[#3F3F46] focus:bg-[#3F3F46] focus:outline-none"
              defaultValue={cortePracticas?.horas_ateriores||0}
              onChange={(e) => {
                const data: setterData = {
                  clave: e.target.name,
                  valor: parseInt(e.target.value, 10) || 0,
                };
                handleChangeCortePracticas(data);
              }}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Horas Totales
            </label>
            <input
              type="number"
              name="horas_totales"
              className="appearance-none block w-full bg-[#27272A] text-gray-100 border-0  rounded-small py-4 px-4 mb-3 leading-tight hover:bg-[#3F3F46] focus:bg-[#3F3F46] focus:outline-none"
              defaultValue={cortePracticas?.horas_totales||0}
              onChange={(e) => {
                const data: setterData = {
                  clave: e.target.name,
                  valor: parseInt(e.target.value, 10) || 0,
                };
                handleChangeCortePracticas(data);
              }}
            />
            </div>
        </div>
      </div>
    </div>
  );
}
