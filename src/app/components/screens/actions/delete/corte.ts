import getHeadersGlobal from "@/app/utils/header-global";

interface PracticanteData {
  practicante: string;
  fecha_corte: string;
  horas_actuales: number;
  horas_anteriores: number;
  horas_totales: number;
}

export async function Corte(id: number, file: File, formData: PracticanteData) {
  const url = `${process.env.API_BASE_URL}/corte-practicas/${id}`; // Cambia la URL aquí
  const headers = getHeadersGlobal();

  // Crear un objeto FormData para enviar el archivo
  const formDataToSend = new FormData();
  formDataToSend.append("file", file); // Asegúrate de que 'file' coincida con el nombre en tu backend

  const response = await fetch(url, {
    method: "POST",
    cache: "no-store",
    headers: headers,
    body: formDataToSend,
  });

  if (!response.ok) {
    throw new Error(`Error al enviar la solicitud: ${response.statusText}`);
  }

  const cortePracticas = await response.json(); // Cambia el nombre de la variable aquí
  return cortePracticas.data; // Cambia el nombre de la variable aquí
}
