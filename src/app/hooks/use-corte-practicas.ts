
import CortePracticas from "../components/screens/forms/corte-practicas/interface/corte-practicas";
import feching from "../utils/cliente-http";
export function useCortePracticas(){
    const onSave = async (payload: CortePracticas) => {
        const url = `/corte-practicas`;
        const rest = await feching(url, "no-store", "POST", payload);
        return rest;
    }

    const onShowAll = async (params: string) => {
        const url = `/corte-practicas?z=1${params}`;
        const rest = await feching(url, "no-cache", "GET");
        return rest;
    }

    const onDelete = async (id: number) => {
        const url = `/corte-practicas/${id}`;
        const rest = await feching(url, "no-cache", "DELETE");
        return rest;
    }

    const onUpdate = async (id: number, payload: CortePracticas) => {
        const url = `/corte-practicas/${id}`;
        const rest = await feching(url, "no-store", "PUT", payload);
        return rest;
    }

    const onShow = async (id: number) => {
        const url = `/corte-practicas/${id}`;
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