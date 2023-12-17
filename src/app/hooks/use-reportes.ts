import { Reportes } from "../interfaces/reportes-interfaces";
import feching from "../utils/cliente-http";

export function useReporte() {
    const onStore = async (payload: Reportes) => {
        const { asignatura, docente, ...restPayload } = payload;


        const formattedPayload = {
            ...restPayload,
            asignatura: { id: Number(asignatura) },
            docente: { id: Number(docente) }
        };

        console.log(formattedPayload);
    };


    const onShowAll = async (id: number) => {
        const url = `/reportes/horas-docente?z=1${id}`;
        const rest = await feching(url, "no-cache", "GET");
        return rest;
    };

    return {
        onShowAll,
        onStore,
    };
}
