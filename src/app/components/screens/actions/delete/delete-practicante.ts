import getHeadersGlobal from "@/app/utils/header-global";

export async function DeletePracticante(id: number) {
  const url = `${process.env.API_BASE_URL}/practicante/${id}`;
  const headers = getHeadersGlobal();
  const data = {
    id: id,
  };
  const practicante = await fetch(url, {
    method: "DELETE",
    cache: "no-store",
    headers: headers,
    body: JSON.stringify(data),
  }).then((res) => res.json());
  return practicante.data;
}
