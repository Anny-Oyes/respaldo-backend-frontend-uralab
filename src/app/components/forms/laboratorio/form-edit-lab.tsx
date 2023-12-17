"use client";

import { useRouter } from "next/navigation";
import FieldsLab from "./fields-lab";
import ButtonUpdateLab from "./button-update-lab";
import { updateLab } from "@/app/actions/post/save-lab";

export default function FormEditLab({ field, closeModal }: { field: any; closeModal: any }) {
  const actualizarLab= async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const id = field?.id;
    const data = await updateLab(id, form);

    closeModal(data);
  };
  return (
    <form onSubmit={actualizarLab}>
      <div>
        <FieldsLab fields={field} />
        <div className="flex justify-end">
          <ButtonUpdateLab close={closeModal} />
        </div>
      </div>
    </form>
  );
}
