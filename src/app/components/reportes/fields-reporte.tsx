import { getAllAsignaturas, getAllDocentes } from "@/app/(setup)/reportes/actions/post/save-reportes";
import { Reportes } from "@/app/interfaces/reportes-interfaces";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { useEffect, useState } from "react";

interface FieldsReportesProps {
    reporte?: Reportes;
    onChangeReporte: (data: setterData) => void;
}

export default function FieldsReportes(
    { reporte, onChangeReporte }: FieldsReportesProps = {
        reporte: {} as Reportes,
        onChangeReporte: () => { }
    }
) {
    const [fields, setFields] = useState<Reportes>({} as Reportes);
    const handleChangeUsoLab = ({ clave, valor }: setterData) => {
        setFields({ ...fields, [clave]: valor });
        onChangeReporte({ clave, valor });
    };

    useEffect(() => {
        if (reporte) {
            setFields(reporte || ({} as Reportes));
        }
    }, [reporte]);

    const [asignaturas, setAsignaturas] = useState([]);
    const [docentes, setDocentes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const asignaturaData = await getAllAsignaturas();
                const docentesData = await getAllDocentes();
                setAsignaturas(asignaturaData);
                setDocentes(docentesData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="mb-6">
                <div>
                    <label htmlFor="asignatura" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Asignatura</label>
                </div>
                <select
                    id="asignatura"
                    name="asignatura"
                    value={fields?.asignatura?.id}
                    onChange={(e) => {
                        console.log(e.target.value);
                        const data: setterData = {
                            clave: e.target.name,
                            valor: e.target.value,
                        };
                        handleChangeUsoLab(data);
                    }}
                    className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-900"
                >
                    <option value="asignatura" >
                        Seleccionar Asignatura
                    </option>
                    {asignaturas.map((asignatura: any) => (
                        <option key={asignatura.id} value={asignatura.id}   >
                            {asignatura.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-6">
                <div>
                    <label htmlFor="docente" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Docente</label>
                </div>
                <select
                    name="docente"
                    id="docente"
                    value={fields?.docente?.id}
                    onChange={(e) => {
                        const data: setterData = {
                            clave: e.target.name,
                            valor: e.target.value,
                        };
                        handleChangeUsoLab(data);
                    }}
                    className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-900"
                >
                    <option value="docente" >
                        Seleccionar docente
                    </option>
                    {docentes.map((docente: any) => (
                        <option key={docente.id} value={docente.id}  >
                            {docente.nombre} {docente.apellido}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-6">
                <div>
                    <label htmlFor="mes" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Mes</label>
                </div>
                <input
                    type="number"
                    name="mes"
                    id="mes"
                    defaultValue={fields?.date?.mes || ""}
                    onChange={(e) => {
                        const data: setterData = {
                            clave: e.target.name,
                            valor: e.target.value,
                        };
                        handleChangeUsoLab(data);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>

            <div className="mb-6">
                <div>
                    <label htmlFor="year" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Año</label>
                </div>
                <input
                    type="number"
                    name="anio"
                    id="anio"
                    defaultValue={fields?.date?.anio || ""}
                    onChange={(e) => {
                        const data: setterData = {
                            clave: e.target.name,
                            valor: e.target.value,
                        };
                        handleChangeUsoLab(data);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Año"
                    min="1"
                    max="5"
                />
            </div>
        </div>
    );
}
