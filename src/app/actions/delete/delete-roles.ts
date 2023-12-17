"use server";
import getHeadersGlobal from "@/app/utils/header-global";

export async function deleteRoles(id: number) {
  const url = `${process.env.API_BASE_URL}/roles/${id}`;
  const headers = getHeadersGlobal();
  const data = {
    id: id,
  };
  const roles = await fetch(url, {
    method: "DELETE",
    cache: "no-store",
    headers: headers,
    body: JSON.stringify(data),
  }).then((res) => res.json());

  return roles.data;
}
