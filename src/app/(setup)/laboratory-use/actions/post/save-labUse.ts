"use server";

import feching from "@/app/utils/cliente-http";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function saveLabUse(request: FormData) {
    const maleCount = parseInt(request.get("male") as string, 10);
    const femaleCount = parseInt(request.get("female") as string, 10);
    const total = maleCount + femaleCount;
    const data = {
        className: { id: request.get("className") },
        carrera: { id: request.get("carrera") },
        docente: { id: request.get("docente") },
        date: request.get("date"),
        modality: { id: request.get("modality") },
        shift: { id: request.get("shift") },
        year: request.get("year"),
        semester: request.get("semester"),
        female: request.get("female"),
        male: request.get("male"),
        total: total,
        hours: request.get("hours"),
        laboratorio: { id: request.get("laboratorio") },

    };
    const endPoind = `/uselab`;

    const registro = await feching(endPoind, "no-store", "POST", data);
    console.log(registro);

    if (!registro.data) {
        console.log(registro.data);
    }
    redirect("/laboratory-use");
}

export const updateLabUse = async (id: number, request: FormData) => {
    const maleCount = parseInt(request.get("male") as string, 10);
    const femaleCount = parseInt(request.get("female") as string, 10);

    const total = maleCount + femaleCount;
    const data = {
        className: { id: request.get("className") },
        carrera: { id: request.get("carrera") },
        docente: { id: request.get("docente") },
        date: request.get("date"),
        modality: { id: request.get("modality") },
        shift: request.get("shift"),
        year: request.get("year"),
        semester: request.get("semester"),
        female: request.get("female"),
        male: request.get("male"),
        total: total,
        hours: request.get("hours"),
        laboratorio: { id: request.get("laboratorio") },

    };
    const endPoind = `/uselab/${id}`;

    const uselab = await feching(endPoind, "no-store", "PUT", data);

    if (!uselab.data) {
        const error = {
            error: uselab.error,
        };
        return error;
    }

    return uselab.data;
};

export const getLabUse = async (id: number) => {
    const endPoind = `/uselab/${id}`;

    const uselab = await feching(endPoind, "no-store", "GET");

    if (!uselab.data) {
        const error = {
            error: uselab.error,
        };
        return error;
    }

    return uselab.data;
};

export const deteleLabUseById = async (id: number) => {
    const endPoind = `/uselab/${id}`;

    const uselab = await feching(endPoind, "no-store", "DELETE");

    if (!uselab.data) {
        return [uselab.data];
    }


};

export const getAllLabUse = async () => {
    const endPoind = `/uselab`;

    const labUse = await feching(endPoind, "no-store", "GET");

    if (!labUse.data) {
        throw new Error(labUse);
    }

    return labUse.data;
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
export const getAllTurnos = async () => {
    const endPoind = `/turnos`;

    const turnos = await feching(endPoind, "no-store", "GET");

    if (!turnos) {
        throw new Error(turnos);
  
    }

    return turnos;
};

export const getAllModalidades = async () => {
    const endPoind = `/modalidades`;

    const modalidades = await feching(endPoind, "no-store", "GET");

    if (!modalidades.data) {
        throw new Error(modalidades);
    }

    return modalidades.data;
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

export const getAllLaboratorio = async () => {
    const endPoind = `/labregister`;

    const laboratorios = await feching(endPoind, "no-store", "GET");

    if (!laboratorios.data) {
        throw new Error(laboratorios);
    }

    return laboratorios.data;
};