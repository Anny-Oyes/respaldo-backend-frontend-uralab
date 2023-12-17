import { Area } from "@/app/interfaces/areas-interfaces";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { Input, Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface FieldsAreasProps {
  area?: Area;
  onChangeArea: (data: setterData) => void;
}
export default function FieldsAreass(
  { area, onChangeArea }: FieldsAreasProps = {
    area: {} as Area,
    onChangeArea: () => {},
  }
) {
  const [fields, setFields] = useState<Area>({} as Area);
  const handleChangeArea = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    onChangeArea({ clave, valor });
  };

  useEffect(() => {
    if (area) {
      setFields(area || ({} as Area));
    }
  }, [area]);
  return (
    <div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size="sm"
            type="text"
            label="nombre"
            name="nombre"
            placeholder="Escriba una Area..."
            defaultValue={area?.nombre}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangeArea(data);
            }}
          />
        </div>
      </div>
    </div>
  );
}
