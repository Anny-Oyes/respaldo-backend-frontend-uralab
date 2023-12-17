"use server";

import feching from "@/app/utils/cliente-http";

export async function saveAsignatura(request: FormData) {
  const data = {
    nombre: request.get("nombre"),
  };

  const endPoind = `/asignatura`;

  const asignatura = await feching(endPoind, "no-store", "POST", data);

  if (!asignatura.data) {
    throw new Error(asignatura.error);
  }

  return asignatura.data;
}

export const updateAsignatura = async (id: number, request: FormData) => {
  const data = {
    nombre: request.get("nombre"),
  };

  const endPoind = `/asignatura/${id}`;

  const asignatura = await feching(endPoind, "no-store", "PUT", data);

  if (!asignatura.data) {
    const error = {
      error: asignatura.error,
    };
    return error;
  }

  return asignatura.data;
};

export const getAsignatura= async (id: number) => {
  const endPoind = `/asignatura/${id}`;

  const asignatura = await feching(endPoind, "no-store", "GET");

  if (!asignatura.data) {
    const error = {
      error: asignatura.error,
    };
    return error;
  }

  return asignatura.data;
};

export const deleteAsignaturaById = async (id: number) => {
  const endPoind = `/asignatura/${id}`;

  const asignatura = await feching(endPoind, "no-store", "DELETE");
  console.log(asignatura);

  if (!asignatura.message) {
    throw new Error(asignatura);
  }

  return asignatura.data;
};

export const getAllAsignatura = async () => {
  const endPoind = `/asignatura`;

  const asignatura = await feching(endPoind, "no-store", "GET");

  if (!asignatura.data) {
    throw new Error(asignatura);
  }

  return asignatura.data;
};
