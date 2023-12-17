"use server";

import feching from "@/app/utils/cliente-http";

export async function saveAreas(request: FormData) {
  const data = {
    nombre: request.get("nombre"),
  };

  const endPoind = `/registro-area`;

  const areas = await feching(endPoind, "no-store", "POST", data);

  if (!areas.data) {
    throw new Error(areas.error);
  }

  return areas.data;
}

export const updateArea = async (id: number, request: FormData) => {
  const data = {
    nombre: request.get("nombre"),
  };

  const endPoind = `/registro-area/${id}`;

  const areas = await feching(endPoind, "no-store", "PUT", data);

  if (!areas.data) {
    const error = {
      error: areas.error,
    };
    return error;
  }

  return areas.data;
};

export const getAreas = async (id: number) => {
  const endPoind = `/registro-area/${id}`;

  const areas = await feching(endPoind, "no-store", "GET");

  if (!areas.data) {
    const error = {
      error: areas.error,
    };
    return error;
  }

  return areas.data;
};

export const deleteAreaById = async (id: number) => {
  const endPoind = `/registro-area/${id}`;

  const areas = await feching(endPoind, "no-store", "DELETE");
  console.log(areas);

  if (!areas.message) {
    throw new Error(areas);
  }

  return areas.data;
};

export const getAllAreas = async () => {
  const endPoind = `/registro-area`;

  const areas = await feching(endPoind, "no-store", "GET");

  if (!areas.data) {
    throw new Error(areas);
  }

  return areas.data;
};
