export interface UsoLab {
  id?: number;

  className?: {
    id: number;
    nombre: string;
  };
  date?: string;
  carrera?: {
    id: number;
    nombre: string;
    area?: {
      nombre: string;
      id: number;
    };
  };
  docente?: {
    id: number;
    nombre: string;
    apellido: string;
  };
  modality?: {
    id: number;
    modalidad: string;
  };
  laboratorio?: {
    id: number;
    labName: string;
  };
  shift?: {
    id: number;

  };
  year?: number;
  semester?: string;
  female?: number;
  male?: number;
  hours?: string;
 
  is_active?: boolean;
  deleted_at?: string;
}
