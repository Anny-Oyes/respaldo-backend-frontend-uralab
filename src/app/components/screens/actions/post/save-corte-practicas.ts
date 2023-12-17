"use server";

import feching from "@/app/utils/cliente-http";
//corte-practicas
export async function saveCortePractica(request: FormData) {
  const data = {
    practicante: request.get("practicante"),
    fecha_corte: request.get("fecha_corte"),
    horas_actuales: request.get("horas_actuales"),
    horas_anteriores: request.get("horas_anteriores"),
    horas_totales: request.get("horas_totales"),
  };

  console.log(data);
  const endPoind = `/corte-practicas`;
  const cortePractica = await feching(endPoind, "no-store", "POST", data);

  if (!cortePractica.data) {
    const error = {
      error: cortePractica.error,
    };
    return error;
  }

  return cortePractica.data;
}

export async function updateCortePractica(id: number, request: FormData) {
  const data = {
    Practicante: request.get("nombre"),
    fecha_corte: request.get("fecha_corte"),
    horas_actuales: request.get("horas_actuales"),
    horas_anteriores: request.get("horas_anteriores"),
    horas_totales: request.get("horas_totales"),
  };
  const endPoind = `/corte-practicas/${id}`;
  const cortePractica = await feching(endPoind, "no-store", "PUT", data);

  if (!cortePractica.data) {
    const error = {
      error: cortePractica.error,
    };
  }

  return cortePractica.data;
}

export async function getCortePractica(id: number) {
  const endPoind = `/corte-practicas/${id}`;
  const cortePractica = await feching(endPoind, "no-store", "GET");
  if (!cortePractica.data) {
    throw new Error(cortePractica);
  }
  return cortePractica.data;
}
export async function getCortePracticas() {
  const endPoind = `/corte-practicas`;
  const cortePractica = await feching(endPoind, "no-store", "GET");
  if (!cortePractica.data) {
    throw new Error(cortePractica);
  }
  return cortePractica.data;
}
export async function deleteCortePractica(id: number) {
  const endPoind = `/corte-practicas/${id}`;
  const cortePractica = await feching(endPoind, "no-store", "DELETE");
  if (!cortePractica.data) {
    throw new Error(cortePractica);
  }
  return cortePractica.data;
}
