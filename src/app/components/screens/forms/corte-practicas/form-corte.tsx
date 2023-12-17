import { revalidatePath } from "next/cache";

import FieldsCortePracticas from "./filds-corte";
import { saveCortePractica } from "../../actions/post/save-corte-practicas";

export default function FormCortePracticas({ corteId = "" }) {
  const crearCorte = async (formData: FormData) => {
    "use server";
    const data = await saveCortePractica(formData);
    revalidatePath("/corte-practicas");
    console.log(data);
  };
  return (
    <form action={crearCorte}>
      <div>
        <FieldsCortePracticas />
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
