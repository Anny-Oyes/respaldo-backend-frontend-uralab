"use server";

import feching from "@/app/utils/cliente-http";

export async function saveDocentes(request: FormData) {
  const data = {
    nombre: request.get("nombre"),
    apellido: request.get("apellido"),
    fechaNacimiento: request.get("fechaNacimiento"),
  };

  const endPoind = `/docentes`;

  const docente = await feching(endPoind, "no-store", "POST", data);

  if (!docente.data) {
    throw new Error(docente.error);
  }

  return docente.data;
}

export const updateDocente = async (id: number, request: FormData) => {
  const data = {
    nombre: request.get("nombre"),
    apellido: request.get("apellido"),
    fechaNacimiento: request.get("fechaNacimiento"),
  };

  const endPoind = `/docentes/${id}`;

  const docente = await feching(endPoind, "no-store", "PUT", data);

  if (!docente.data) {
    const error = {
      error: docente.error,
    };
    return error;
  }

  return docente.data;
};

export const getDocente = async (id: number) => {
  const endPoind = `/docentes/${id}`;

  const docente = await feching(endPoind, "no-store", "GET");

  if (!docente.data) {
    const error = {
      error: docente.error,
    };
    return error;
  }

  return docente.data;
};

export const deleteDocenteById = async (id: number) => {
  const endPoind = `/docentes/${id}`;

  const docente = await feching(endPoind, "no-store", "DELETE");
  console.log(docente);

  if (!docente.message) {
    throw new Error(docente);
  }

  return docente.data;
};

export const getAllDocente = async () => {
  const endPoind = `/docentes`;

  const docente = await feching(endPoind, "no-store", "GET");

  if (!docente.data) {
    throw new Error(docente);
  }

  return docente.data;
};
