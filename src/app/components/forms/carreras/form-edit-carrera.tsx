"use client";
import { getAllAreas, updateArea } from "@/app/actions/post/save-areas";
import { useRouter } from "next/navigation";
import FieldsCarreras from "./fields-carreras";
import ButtonUpdateCarrera from "./button-update-carrera";
import { updateCarrera } from "@/app/actions/post/save-carreras";

interface Area {
  id: number;
  nombre: string;
}

export default async function FormEditCarrera({ fields, closeModal }: { fields: any; closeModal: any; areas: Area[] }) {
  const actualizarCarrera = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const id = fields?.id;
    const data = await updateCarrera(id, form);

    closeModal(data);
  };

  const data = await getAllAreas();

  return (
    <form onSubmit={actualizarCarrera}>
      <div>
        <FieldsCarreras fields={fields} areas={data} />
        <div className="flex justify-end">
          <ButtonUpdateCarrera close={closeModal} />
        </div>
      </div>
    </form>
  );
}
