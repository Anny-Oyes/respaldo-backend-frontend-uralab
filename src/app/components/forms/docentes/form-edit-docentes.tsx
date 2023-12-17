"use client";

import { updateArea } from "@/app/actions/post/save-areas";
import { useRouter } from "next/navigation";
import FieldsDocentes from "./fields-docentes";
import ButtonUpdateDocente from "./button-update-docentes";
import { updateDocente } from "@/app/actions/post/save-docente";

export default function FormEditDocente({ field, closeModal }: { field: any; closeModal: any }) {
  const actualizarDocente = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const id = field?.id;
    const data = await updateDocente(id, form);

    closeModal(data);
  };
  return (
    <form onSubmit={actualizarDocente}>
      <div>
        <FieldsDocentes fields={field} />
        <div className="flex justify-end">
          <ButtonUpdateDocente close={closeModal} />
        </div>
      </div>
    </form>
  );
}
