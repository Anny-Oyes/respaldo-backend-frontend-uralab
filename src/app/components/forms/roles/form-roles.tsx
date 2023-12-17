import { revalidatePath } from "next/cache";

import FieldsRoles from "./fields-roles";
import { saveRoles } from "@/app/actions/post/save-roles";

export default function FormRoles({ roleId = "" }) {
  const crearRole = async (formData: FormData) => {
    "use server";
    const data = await saveRoles(formData);

    revalidatePath("/roles");
  };

  return (
    <form action={crearRole}>
      <div>
        <FieldsRoles />

        <div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            name='btn-guardar'
          >
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
}
