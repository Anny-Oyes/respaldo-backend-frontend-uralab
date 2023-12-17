import FormLab from "@/app/components/forms/laboratorio/form-lab";
import TableLab from "@/app/components/tables/table-labs";


export default function DocentesPage() {
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="mb-3">Registro de laboratorio</h1>
        <div className="mb-3">
          <div>
            <FormLab />
          </div>
        </div>
        <TableLab />
      </div>
    </div>
  );
}
