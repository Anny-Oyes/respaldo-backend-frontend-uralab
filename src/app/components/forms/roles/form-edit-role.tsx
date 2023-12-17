"use client";
import FieldsRoles from "./fields-roles";
import ButtonUpdateRole from "./button-update-role";
import { updateRole } from "@/app/actions/post/save-roles";
import { useRouter } from "next/navigation";

export default function FormEditRole({
  fields,
  closeModal,
}: {
  fields: any;
  closeModal: any;
}) {
  const actualiarRole = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const id = fields?.id;
    const data = await updateRole(id, form);

    closeModal(data);
  };
  return (
    <form onSubmit={actualiarRole}>
      <div>
        <FieldsRoles fields={fields} />
        <div className='flex justify-end'>
          <ButtonUpdateRole close={closeModal} />
        </div>
      </div>
    </form>
  );
}
