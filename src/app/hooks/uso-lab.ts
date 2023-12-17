import { UsoLab } from "../interfaces/usoLab-interfaces";
import feching from "../utils/cliente-http";

export function useLaboratorio() {
  const onStore = async (payload: UsoLab) => {
    const { male, female, className, carrera, docente, modality,shift, laboratorio, ...restPayload } = payload;
  

    const formattedPayload = {
      ...restPayload,
      total: Number(male) + Number(female),
      male: Number(male),
      female: Number(female),
      className: { id: Number(className) },  
      carrera: { id: Number(carrera) },      
      docente: { id: Number(docente) },      
      modality: { id: Number(modality) },    
      shift: { id: Number(shift) },    
      laboratorio: { id: Number(laboratorio) },  
    };
  
    console.log(formattedPayload);
  
    const url = `/uselab`;
  
    const rest = await feching(url, "no-store", "POST", formattedPayload);
  
    console.log(rest);
    return rest;
  };
  

  const onShowAll = async (id: number) => {
    const url = `/uselab?z=1${id}`;
    const rest = await feching(url, "no-cache", "GET");
    return rest;
  };

  const onDelete = async (id: number) => {
    const url = `/uselab/${id}`;
    const rest = await feching(url, "no-cache", "DELETE");
    return rest;
  };

  const onUpdate = async (id: number, payload: UsoLab) => {
    const { male, female, className, carrera, docente, modality, laboratorio,shift, ...restPayload } = payload;
  
    const formattedPayload = {
      ...restPayload,
      total: Number(male) + Number(female),
      male: Number(male),
      female: Number(female),
      className: { id: Number(className) },
      carrera: { id: Number(carrera) },
      docente: { id: Number(docente) },
      modality: { id: Number(modality) },
      shift: { id: Number(shift) },  
      laboratorio: { id: Number(laboratorio) },
    };
  
    console.log(formattedPayload);
    
    const url = `/uselab/${id}`;
    const rest = await feching(url, "no-store", "PUT", formattedPayload);
    
    console.log(rest);
    return rest;
  };
  

  const onShow = async (id: number) => {
    const url = `/uselab/${id}`;
    const rest = await feching(url, "no-cache", "GET");
    return rest;
  }

  return {
    onShowAll,
    onStore,
    onDelete,
    onUpdate,
    onShow
  };
}
