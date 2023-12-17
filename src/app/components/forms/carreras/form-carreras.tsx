import { revalidatePath, revalidateTag } from "next/cache";
import { getAllAreas } from "../../../actions/post/save-areas";
import FieldsCarreras from "./fields-carreras";
import { saveCarreras } from "@/app/actions/post/save-carreras";
export default async function FormCarreras({ carreraId = "" }) {
  const crearCarrera = async (formData: FormData) => {
    "use server";
    const data = await saveCarreras(formData);

    revalidatePath("/registro-carreras");
  };

  const data = await getAllAreas();

  return (
    <form action={crearCarrera}>
      <div>
        <FieldsCarreras fields={{}} areas={data} />

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
