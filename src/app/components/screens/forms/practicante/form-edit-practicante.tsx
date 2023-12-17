"use client";
import { setterData } from "@/app/interfaces/setter-interfaces";
import Practicante from './interface/practicante';
import {useEffect, useState } from "react";
import { Input, Switch } from "@nextui-org/react";

interface FormEditPracticanteProps {
  practicante?: Practicante;
  onChengaPracticante: (data:setterData) => void;
}

export default function FormEditPracticante({ practicante, onChengaPracticante
}: FormEditPracticanteProps){
  const [fields, setFields] = useState<Practicante>({} as Practicante);
  const handleChangePracticante = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    onChengaPracticante({ clave, valor });
  }
  useEffect(() => {
    if (practicante) {
      setFields(practicante || ({} as Practicante));
    }
  }, [practicante]);
  return (
    <div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size="sm"
            type="text"
            label="Nombre"
            name="nombre"
            placeholder="Escriba un nombre..."
            defaultValue={practicante?.nombres}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangePracticante(data);
            }}
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 mt-2">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size="sm"
            type="text"
            label="Apellido"
            name="apellido"
            placeholder="Escriba un apellido..."
            defaultValue={practicante?.apellidos}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangePracticante(data);
            }}
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 mt-2">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size="sm"
            type="text"
            label="Carrera"
            name="carrera"
            placeholder="Escriba una carrera..."
            defaultValue={practicante?.carreraId?.toString()}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangePracticante(data);
            }}
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 mt-2">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size="sm"
            type="date"
            label="Fecha inicio"
            name="fecha_inicio"
            placeholder="Escriba una fecha de inicio..."
            defaultValue={practicante?.fecha_inicio}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangePracticante(data);
            }}
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 mt-2">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size="sm"
            type="date"
            label="Fecha fin"
            name="fecha_fin"
            placeholder="Escriba una fecha de fin..."
            defaultValue={practicante?.fecha_fin}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangePracticante(data);
            }}
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 mt-2">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size="sm"
            type="number"
            label="Cantidad horas"
            name="cantidad_horas"
            placeholder="Escriba una cantidad de horas..."
            defaultValue={practicante?.cantidad_horas?.toString()}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangePracticante(data);
            }}
          />
        </div>
      </div>
    </div>
  );
}