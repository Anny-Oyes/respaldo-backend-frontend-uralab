"use server";

import feching from "@/app/utils/cliente-http";

export async function saveLab(request: FormData) {
  const data = {
    labName: request.get("labName"),
    description: request.get("description"),
    fundation: request.get("fundation"),
    builder: request.get("builder"),
  };

  const endPoind = `/labregister`;

  const laboratorio = await feching(endPoind, "no-store", "POST", data);

  if (!laboratorio.data) {
    throw new Error(laboratorio.error);
  }

  return laboratorio.data;
}

export const updateLab = async (id: number, request: FormData) => {
  const data = {
    labName: request.get("labName"),
    description: request.get("description"),
    fundation: request.get("fundation"),
    builder: request.get("builder"),
  };

  const endPoind = `/labregister/${id}`;

  const laboratory = await feching(endPoind, "no-store", "PUT", data);

  if (!laboratory.data) {
    const error = {
      error: laboratory.error,
    };
    return error;
  }

  return laboratory.data;
};

export const getLab = async (id: number) => {
  const endPoind = `/labregister/${id}`;

  const laboratory = await feching(endPoind, "no-store", "GET");

  if (!laboratory.data) {
    const error = {
      error: laboratory.error,
    };
    return error;
  }

  return laboratory.data;
};

export const deleteLabById = async (id: number) => {
  const endPoind = `/labregister/${id}`;

  const laboratory = await feching(endPoind, "no-store", "DELETE");
  console.log(laboratory);

  if (!laboratory.message) {
    throw new Error(laboratory);
  }

  return laboratory.data;
};

export const getAllLabs = async () => {
  const endPoind = `/labregister`;

  const laboratory = await feching(endPoind, "no-store", "GET");

  if (!laboratory.data) {
    throw new Error(laboratory);
  }

  return laboratory.data;
};
