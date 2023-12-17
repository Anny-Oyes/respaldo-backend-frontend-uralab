"use server";

import feching from "@/app/utils/cliente-http";
import { log } from "console";

export async function saveModalidades(request: FormData) {
  const data = {
    modalidad: request.get("modalidad"),
  };
  const endPoind = `/modalidades`;

  const modalidades = await feching(endPoind, "no-store", "POST", data);

  if (!modalidades.data) {
    throw new Error(modalidades.error);
  }

  return modalidades.data;
}

export const updateModalidades = async (id: number, request: FormData) => {
  const data = {
    modalidad: request.get("modalidad"),
  };

  const endPoind = `/modalidades/${id}`;

  console.log(data, endPoind);
  const modalidades = await feching(endPoind, "no-store", "PUT", data);

  console.log(modalidades);
  if (!modalidades.data) {
    const error = {
      error: modalidades.error,
    };
    return error;
  }
  return modalidades.data;
};

export const getModalidades = async (id: number) => {
  const endPoind = `/modalidades/${id}`;

  const modalidades = await feching(endPoind, "no-store", "GET");
  if (!modalidades.data) {
    const error = {
      error: modalidades.error,
    };
    return error;
  }

  return modalidades.data;
};

export const deteteModalidadById = async (id: number) => {
  const endPoind = `/modalidades/${id}`;

  const modalidades = await feching(endPoind, "no-store", "DELETE");

  if (!modalidades.data) {
    throw new Error(modalidades);
  }

  return modalidades.data;
};

export const getAllModalidades = async () => {
  const endPoind = `/modalidades`;

  const modalidades = await feching(endPoind, "no-store", "GET");
  if (!modalidades.data) {
    throw new Error(modalidades);
  }
  return modalidades.data;
};
