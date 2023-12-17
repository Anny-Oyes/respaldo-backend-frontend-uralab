"use server";
import feching from "@/app/utils/cliente-http";
import { redirect } from "next/navigation";

export async function saveReportes(request: FormData) {
    const data = {
        asignatura: { id: request.get("asignatura") },
        carrera: { id: request.get("carrera") },
        docente: { id: request.get("docente") },
        mes: request.get("mes"),
        anio: request.get("anio"),

    };
    const endPoind = `/reports-use-laboratory/horas-docente`;

    const registro = await feching(endPoind, "no-store", "POST", data);
    console.log(registro);

    if (!registro.data) {
        console.log(registro.data);
    }
    redirect("/reportes");
}

export const updateReportes = async (id: number, request: FormData) => {
    const data = {
        asignatura: { id: request.get("asignatura") },
        carrera: { id: request.get("carrera") },
        docente: { id: request.get("docente") },
        mes: request.get("mes"),
        anio: request.get("anio"),
    };
    const endPoind = `/reports-use-laboratory/horas-docente/${id}`;

    const reporte = await feching(endPoind, "no-store", "PUT", data);

    if (!reporte.data) {
        const error = {
            error: reporte.error,
        };
        return error;
    }

    return reporte.data;
};

export const getLabUse = async (id: number) => {
    const endPoind = `/reports-use-laboratory/horas-docente/${id}`;

    const reporte = await feching(endPoind, "no-store", "GET");

    if (!reporte.data) {
        const error = {
            error: reporte.error,
        };
        return error;
    }

    return reporte.data;
};

export const deteleReporteById = async (id: number) => {
    const endPoind = `/reports-use-laboratory/horas-docente/${id}`;

    const reporte = await feching(endPoind, "no-store", "DELETE");

    if (!reporte.data) {
        return [reporte.data];
    }


};

export const getAllLabUse = async () => {
    const endPoind = `/reports-use-laboratory/horas-docente`;

    const reportes = await feching(endPoind, "no-store", "GET");

    if (!reportes.data) {
        throw new Error(reportes);
    }

    return reportes.data;
};

export const getAllCarreras = async () => {
    const endPoind = `/registro-carreras`;

    const carreras = await feching(endPoind, "no-store", "GET");

    if (!carreras.data) {
        console.log('Contenido de turnos:', carreras);
        throw new Error(carreras);

    }

    return carreras.data;
};

export const getAllAsignaturas = async () => {
    const endPoind = `/asignatura`;

    const asignatura = await feching(endPoind, "no-store", "GET");

    if (!asignatura.data) {
        throw new Error(asignatura);
    }

    return asignatura.data;
};

export const getAllDocentes = async () => {
    const endPoind = `/docentes`;

    const docentes = await feching(endPoind, "no-store", "GET");

    if (!docentes.data) {
        throw new Error(docentes);
    }

    return docentes.data;
};