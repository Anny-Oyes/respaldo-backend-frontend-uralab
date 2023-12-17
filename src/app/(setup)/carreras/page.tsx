import FormCarreras from "@/app/components/forms/carreras/form-carreras";
import TableCarreras from "@/app/components/tables/table-carreras";

export default function CarrerasPage() {
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="mb-3">Listado de Carreras</h1>
        <div className="mb-3">
          <div>
            <FormCarreras />
          </div>
        </div>
        <TableCarreras />
      </div>
    </div>
  );
}
