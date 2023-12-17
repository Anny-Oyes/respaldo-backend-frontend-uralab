import { revalidatePath, revalidateTag } from "next/cache";
import FieldsLab from "./fields-lab";
import { saveLab } from "@/app/actions/post/save-lab";

export default function FormLab({ docenteId = "" }) {
  const crearLaboratorio = async (formData: FormData) => {
    "use server";
    const data = await saveLab(formData);

    revalidatePath("/labregister");
  };

  return (
    <form action={crearLaboratorio}>
      <div>
        <FieldsLab fields={{}} />

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
