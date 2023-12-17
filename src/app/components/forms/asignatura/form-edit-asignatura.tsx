"use client";
import FieldsAsignatura from "./fields-asignatura";
import ButtonUpdateAsignatura from "./button-update-asignatura";
import { updateAsignatura } from "@/app/actions/post/save-asignatura";

export default function FormEditAsignatura({ field, closeModal }: { field: any; closeModal: any }) {
  const actualizarAsignatura = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const id = field?.id;
    const data = await updateAsignatura(id, form);

    closeModal(data);
  };
  return (
    <form onSubmit={actualizarAsignatura}>
      <div>
        <FieldsAsignatura fields={field} />
        <div className="flex justify-end">
          <ButtonUpdateAsignatura close={closeModal} />
        </div>
      </div>
    </form>
  );
}
