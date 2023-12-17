import { Modalidades } from "@/app/interfaces/modalidades-interface";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { useState, useEffect } from "react";
import { Input, Switch } from "@nextui-org/react";

interface FieldsModalidadesProps {
  modalidades?: Modalidades;
  onChangeModalidades: (data: setterData) => void;
}

export default function FieldsModalidad(
  { modalidades, onChangeModalidades }: FieldsModalidadesProps = {
    modalidades: {} as Modalidades,
    onChangeModalidades: () => {},
  }
) {
  const [fields, setFields] = useState<Modalidades>({} as Modalidades);
  const handleChangeModalidades = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    onChangeModalidades({ clave, valor });
  };
  console.log(modalidades);
  useEffect(() => {
    if (modalidades) {
      setFields(modalidades || ({} as Modalidades));
    }
  }, [modalidades]);

  return (
    <div>
      <div className='w-full flex flex-col gap-4'>
        <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
          <Input
            size='sm'
            type='text'
            label='Modalidad'
            name='modalidad'
            placeholder='Escriba una modalidad...'
            defaultValue={modalidades?.modalidad}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangeModalidades(data);
            }}
          />
        </div>
      </div>
      <div className='w-full flex flex-col gap-4 mt-2'>
        <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
          <Switch
            name='is_active'
            defaultSelected={modalidades?.is_active}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.checked,
              };

              handleChangeModalidades(data);
            }}
          />
          <span className='ml-2'>Activo</span>
        </div>
      </div>
    </div>
  );
}
