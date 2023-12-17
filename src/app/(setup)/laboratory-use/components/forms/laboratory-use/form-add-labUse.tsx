// import { getRoles } from "@/app/actions/post/save-roles";
import { revalidatePath } from "next/cache";
import { saveLabUse } from "../../../actions/post/save-labUse";
import FieldsLabuse from "./fields-labUse";
import { redirect } from "next/navigation";

export default function   FormAddLabUse({ roleId = "" }) {

  const crearRegistro = async (formData: FormData) => {
    "use server";
    const data = await saveLabUse(formData);
     revalidatePath("/laboratory-use");
  }
  // let usoLaboratorios: any = {};
  // if (roleId > 0) {
  //   usoLaboratorios = await getRoles(roleId);

  // }
  


  return (
    <form action={crearRegistro}>
      <div>
        {/* <input type="number" id="id" name="id" defaultValue={fields.id || ""} /> */}
        <FieldsLabuse usoLaboratorios={""} />
        <div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            name="btn-guardar"
          >
            Guardar
          </button>
        </div>

      </div>
    </form>

  );
}
