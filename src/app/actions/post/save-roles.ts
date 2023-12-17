"use server";

import feching from "@/app/utils/cliente-http";

export async function saveRoles(request: FormData) { 
    const data = {
      role: request.get("role"),
    };
    const endPoind = `/roles`;

  const roles = await feching(endPoind, "no-store", "POST", data);

  if (!roles.data) {
    throw new Error(roles.error);
  }

  return roles.data;
}

export const updateRole = async (id: number, request: FormData) => {
  const data = {
    role: request.get("role"),
  };

  const endPoind = `/roles/${id}`;

  const roles = await feching(endPoind, "no-store", "PUT", data);

  if (!roles.data) {
    const error = {
      error: roles.error,
    };
    return error;
  }

  return roles.data;
};

export const getRoles = async (id: number) => {
  const endPoind = `/roles/${id}`;

  const roles = await feching(endPoind, "no-store", "GET");

  if (!roles.data) {
    const error = {
      error: roles.error,
    };
    return error;
  }

  return roles.data;
};

export const deteteRoleById = async (id: number) => {
  const endPoind = `/roles/${id}`;

  const roles = await feching(endPoind, "no-store", "DELETE");

  if (!roles.data) {
    throw new Error(roles);
  }

  return roles.data;
};

export const getAllRoles = async () => {
  const endPoind = `/roles`;

  const roles = await feching(endPoind, "no-store", "GET");

  if (!roles.data) {
    throw new Error(roles);
  }

  return roles.data;
};
