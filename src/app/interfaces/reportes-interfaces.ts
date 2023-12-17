export interface Reportes {
    id?: number;
    docente?: {
        id: number;
        nombre: string;
        apellido: string;
    };
    asignatura?: {
        id: number;
        nombre: string;
    };
    carrera?: {
        id: number;
        nombre: string;
        area?: {
            nombre: string;
            id: number;
        }
    };
    date?: {
        mes: number;
        anio?: number;
    };
}
