import { revalidatePath } from "next/cache";

import FieldsPracticantes from "./fields-practicante";
import { savePracticante } from "../../actions/post/save-practicantes";

export default function FormPracticante({ practicanteId = "" }) {
  const crearPracticante = async (formData: FormData) => {
    "use server";
    const data = await savePracticante(formData);
    revalidatePath("/practicante");
  };
  return (
    <form action={crearPracticante}>
      <div>
        <FieldsPracticantes fields={{}} />
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
