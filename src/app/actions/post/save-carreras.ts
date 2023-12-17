"use server";

import feching from "@/app/utils/cliente-http";

export async function saveCarreras(request: FormData) {
  const data = {
    nombre: request.get("nombre"),
    area: { id: Number(request.get("area")) },
  };

  const endPoind = `/registro-carreras`;

  const carreras = await feching(endPoind, "no-store", "POST", data);

  if (!carreras.data) {
    throw new Error(carreras.error);
  }

  return carreras.data;
}

export const updateCarrera = async (id: number, request: FormData) => {
  const data = {
    nombre: request.get("nombre"),
    area: { id: Number(request.get("area")) },
  };

  const endPoind = `/registro-carreras/${id}`;

  const carreras = await feching(endPoind, "no-store", "PUT", data);

  if (!carreras.data) {
    const error = {
      error: carreras.error,
    };
    return error;
  }

  return carreras.data;
};

export const getCarreras = async (id: number) => {
  const endPoind = `/registro-carreras/${id}`;

  const carreras = await feching(endPoind, "no-store", "GET");

  if (!carreras.data) {
    const error = {
      error: carreras.error,
    };
    return error;
  }

  return carreras.data;
};

export const deleteCarreraById = async (id: number) => {
  const endPoind = `/registro-carreras/${id}`;

  const carreras = await feching(endPoind, "no-store", "DELETE");
  console.log(carreras, endPoind);

  if (!carreras.message) {
    throw new Error(carreras);
  }

  return carreras.data;
};

export const getAllCarreras = async () => {
  const endPoind = `/registro-carreras`;

  const carreras = await feching(endPoind, "no-store", "GET");

  if (!carreras.data) {
    throw new Error(carreras);
  }

  return carreras.data;
};
