
import { Reportes } from "@/app/interfaces/reportes-interfaces";


interface TableReportesProps {
    reporte: Reportes[];
}
const TableReportes = ({ reporte }: TableReportesProps) => {

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">DOCENTE</th>
                            <th className="px-6 py-3">ASIGNATURA</th>
                            <th className="px-6 py-3">MES</th>
                            <th className="px-6 py-3">AÑO</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        {Object.values(reporte).map((reporte: any) => (
                            <tr key={`reporte-${reporte.id}`}>
                                <td className="px-6 py-4">{reporte.docente}</td>
                                <td className="px-6 py-4">{reporte.asignatura}</td>
                                <td className="px-6 py-4">{reporte.mes}</td>
                                <td className="px-6 py-4">{reporte.anio}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default TableReportes;