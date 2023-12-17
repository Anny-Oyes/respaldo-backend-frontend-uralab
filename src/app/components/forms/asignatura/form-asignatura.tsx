import { revalidatePath, revalidateTag } from "next/cache";
import FieldsAsignatura from "./fields-asignatura";
import { saveAsignatura } from "@/app/actions/post/save-asignatura";

export default function FormAsignatura({ asignaturaId: asignaturaId = "" }) {
  const crearAsignatura = async (formData: FormData) => {
    "use server";
    const data = await saveAsignatura(formData);

    revalidatePath("/asignatura");
  };

  return (
    <form action={crearAsignatura}>
      <div>
        <FieldsAsignatura fields={{}} />

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
