import Practicante from "../components/screens/forms/practicante/interface/practicante";
import feching from "../utils/cliente-http";

export function usePracticante(){
    const onSave = async (payload: Practicante) => {
        const url = `/practicante`;
        const rest = await feching(url, "no-store", "POST", payload);
        return rest;
    };
    
    const onShowAll = async (params: string) => {
        const url = `/practicante?z=1${params}`;
        const rest = await feching(url, "no-cache", "GET");
        return rest;
    };
    
    const onDelete = async (id: number) => {
        const url = `/practicante/${id}`;
        const rest = await feching(url, "no-cache", "DELETE");
        return rest;
    };
    
    const onUpdate = async (id: number, payload: Practicante) => {
        const url = `/practicante/${id}`;
        const rest = await feching(url, "no-store", "PUT", payload);
        return rest;
    };
    
    const onShow = async (id: number) => {
        const url = `/practicante/${id}`;
        const rest = await feching(url, "no-cache", "GET");
        return rest;
    }
    
    return {
        onShowAll,
        onSave,
        onDelete,
        onUpdate,
        onShow
    };
}