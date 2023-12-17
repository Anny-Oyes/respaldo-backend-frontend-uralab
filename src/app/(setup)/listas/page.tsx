"use client";
import ListAreas from "@/app/components/listas/ListAreas";
import ListCortePracticante from "@/app/components/listas/ListCortePracticante";
import ListModalidades from "@/app/components/listas/ListModalidades";
import ListPracticante from "@/app/components/listas/ListPracticante";
import ListRoles from "@/app/components/listas/ListRoles";
import ListUsers from "@/app/components/listas/ListUsers";
import ListCarrera from "@/app/components/listas/ListaCarrera";
import ListUsoLab from "@/app/components/listas/ListUsoLab";
import ListLab from "@/app/components/listas/ListLaboratory";
import { useState } from "react";
import ListReservaciones from "@/app/components/listas/ListReservaciones";
import ListAsignatura from "@/app/components/listas/ListAsignatura";
import ListDocentes from "@/app/components/listas/ListDocentes";
import { checkIsOnDemandRevalidate } from "next/dist/server/api-utils";
import ListTurnos from "@/app/components/listas/ListTurnos";

export default function ListasPages() {
  const [fields, setFields] = useState<any>({});
  const changeRole = (id: number) => {
    setFields({ ...fields, role_id: id });
  };

  const changeUsolab = (id: number) => {
    setFields({ ...fields, uso_lab_id: id });
  };
  const changeModalidad = (e: any) => {
    setFields({ ...fields, modalidad_id: e.id });
    console.log("desde la pagina ", e.id);
  };
  const changeFechaCorte = (e: any) => {
    setFields({ ...fields, modalidad_id: e.id });
    console.log("desde la pagina ", e.id);
  };
  const changeArea = (id: number) => {
    setFields({ ...fields, area_id: id });
  };

  const changeUser = (e: any) => {
    setFields({ ...fields, user_id: e.id });
    console.log("desde la pagina ", e.id);
  };

  const changePracticante = (id: number) => {
    setFields({ ...fields, practicante_id: id });
  };

  const changeCarrea = (e: any) => {
    setFields({ ...fields, carrera_id: e.id });
  };

  const changeAsignatura = (id: number) => {
    setFields({ ...fields, asignatura_id: id });
  };

  const changeDocente = (id: number) => {
    setFields({ ...fields, docente_id: id });
  };
  const changeLaboratory = (e: any) => {
    setFields({ ...fields, laboratory_id: e.id });
  };

  const changeTurnos = (id: number) => {
    setFields({ ...fields, Turnos_id: id });
  };


  const role = {
    id: 1,
    role: "Admin",
    is_active: true,
  };
  const docente = {
    id: 1,
    docente: {
      nombre: "Jairo",
      apellido: "Lup",
    },
    is_active: true,
  };

  const practicante = {
    id: 1,
    nombres: "practicante",
  };

  return (
    <div className="min-h-screen flex-col items-center justify-between">
      <pre>{JSON.stringify(fields, null, 2)}</pre>
      <h1>Listas Pages</h1>
      <ListRoles datos={role} selected={changeRole} />
      <hr />
      <h1>Modalidades</h1>
      <ListModalidades selected={changeModalidad} />
      <hr />
      <h1>Corte Practicas</h1>
      <ListCortePracticante selected={changeFechaCorte} />

      <h1>Uso del laboratorio</h1>
      <ListUsoLab datos={[docente]} selected={changeUsolab} />


      <h1>Listas de Areas</h1>
      <ListAreas selected={changeArea} />

      <h1>Lista de Practicante</h1>
      <ListPracticante datos={practicante} selected={changePracticante} />

      <h1>Lista de Usuarios</h1>
      <ListUsers selected={changeUser} />

      <h1>Lista de Laboratorios</h1>
      <ListLab selected={changeLaboratory} />

      <h1>Lista de Carreras</h1>
      <ListCarrera selected={changeCarrea} />

      <h1>Lista Reservaciones</h1>

      <h1>Lista Asignaturas</h1>
      <ListAsignatura selected={changeAsignatura} />

      <h1>Lista de Docentes</h1>
      <ListDocentes selected={changeDocente} />

      <h1>Lista de Turnos</h1>
      <ListTurnos selected={changeTurnos} />

    </div>
  );
}
