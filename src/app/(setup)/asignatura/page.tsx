import FormAsignatura from "@/app/components/forms/asignatura/form-asignatura";
import TableAsignatura from "@/app/components/tables/options-asignatura";



export default function AsignaturaPage() {
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="mb-3">Listado de Asignatura</h1>
        <div className="mb-3">
          <div>
            <FormAsignatura />
          </div>
        </div>
        <TableAsignatura />
      </div>
    </div>
  );
}
