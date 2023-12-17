import { useEffect, useState } from "react";
import Practicante from "./interface/practicante";
import { Input, Select } from "@nextui-org/react";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { getAllCarreras } from "@/app/actions/post/save-carreras";
interface FieldsPracticanteProps {
  practicante?: Practicante;
  onChangePracticante: (data: setterData) => void;
}
export default function FieldsPracticantesSearch(
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
        </div>
      </div>
    </div>
  );
}
