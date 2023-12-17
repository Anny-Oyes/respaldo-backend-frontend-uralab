import FormDocentes from "@/app/components/forms/docentes/form-docentes";
import TableDocentes from "@/app/components/tables/table-docentes";


export default function DocentesPage() {
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="mb-3">Listado de Docentes</h1>
        <div className="mb-3">
          <div>
            <FormDocentes />
          </div>
        </div>
        <TableDocentes />
      </div>
    </div>
  );
}
