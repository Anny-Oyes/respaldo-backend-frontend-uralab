import feching from "../utils/cliente-http";
import { Modalidades } from "../interfaces/modalidades-interface";
export default function useModalidades() {
  const onStore = async (payload: Modalidades) => {
    const url = `/modalidades`;
    const rest = await feching(url, "no-store", "POST", payload);
    return rest;
  };

  const onShowAll = async (params: string) => {
    const url = `/modalidades?z=1${params}`;
    const rest = await feching(url, "no-cache", "GET");
    return rest;
  };

  const onDelete = async (id: number) => {
    const url = `/modalidades/${id}`;
    const rest = await feching(url, "no-cache", "DELETE");
    return rest;
  };

  const onUpdate = async (id: number, payload: Modalidades) => {
    const url = `/modalidades/${id}`;
    const rest = await feching(url, "no-store", "PUT", payload);
    return rest;
  };

  const onShow = async (id: number) => {
    const url = `/modalidades/${id}`;
    const rest = await feching(url, "no-cache", "GET");
    return rest;
  };

  return {
    onShowAll,
    onStore,
    onDelete,
    onUpdate,
    onShow,
  };
}
