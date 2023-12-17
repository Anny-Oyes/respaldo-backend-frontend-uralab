import { updateCortePractica } from "../../actions/post/save-practicantes";
import ButtonUpdateCorte from "./button-update-corte";
import FieldsCortePracticas from "./filds-corte";

export default function FormEditCorte({
  fields,
  closeModal,
}: {
  fields: any;
  closeModal: any;
}) {
  const actualiarCorte = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const id = fields?.id;
    const data = await updateCortePractica(id, form);

    closeModal(data);
  };
  return (
    <form onSubmit={actualiarCorte}>
      <div>
        <FieldsCortePracticas corte={fields} />
        <div className="flex justify-end">
          <ButtonUpdateCorte close={closeModal} />
        </div>
      </div>
    </form>
  );
}
