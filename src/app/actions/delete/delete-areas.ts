"use server";
import getHeadersGlobal from "@/app/utils/header-global";

export async function deleteAreas(id: number) {
  const url = `${process.env.API_BASE_URL}/registro-area/${id}`;
  const headers = getHeadersGlobal();
  const data = {
    id: id,
  };
  const areas = await fetch(url, {
    method: "DELETE",
    cache: "no-store",
    headers: headers,
    body: JSON.stringify(data),
  }).then((res) => res.json());

  return areas.data;
}
