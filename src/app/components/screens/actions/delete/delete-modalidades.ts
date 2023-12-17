import getHeadersGlobal from "@/app/utils/header-global";

export async function deleteModalidades(id: number) {
  const url = `${process.env.API_BASE_URL}/modalidades/${id}`;
  const headers = getHeadersGlobal();
  const data = {
    id: id,
  };
  const modalidades = await fetch(url, {
    method: "DELETE",
    cache: "no-store",
    headers: headers,
    body: JSON.stringify(data),
  }).then((res) => res.json());

  return modalidades.data;
}
