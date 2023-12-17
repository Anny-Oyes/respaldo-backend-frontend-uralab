"use client";
import FieldsAreas from "./fields-areas";
import ButtonUpdateAreas from "./button-update-area";
import { updateArea } from "@/app/actions/post/save-areas";
import { useRouter } from "next/navigation";

export default function FormEditArea({ fields, closeModal }: { fields: any; closeModal: any }) {
  const actualiarArea = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const id = fields?.id;
    const data = await updateArea(id, form);

    closeModal(data);
  };
  return (
    <form onSubmit={actualiarArea}>
      <div>
        <FieldsAreas fields={fields} />
        <div className="flex justify-end">
          <ButtonUpdateAreas close={closeModal} />
        </div>
      </div>
    </form>
  );
}
