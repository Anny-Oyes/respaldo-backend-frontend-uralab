"use client";
import { useEffect, useState } from "react";
import useUtils from "@/app/hooks/use-utils";
import TableReportes from "@/app/components/tables/table-reportes";
import { Reportes } from "@/app/interfaces/reportes-interfaces";
import BtnFilterReportes from "@/app/components/reportes/btn-filter";
import { useReporte } from "@/app/hooks/use-reportes";


function LabUsePage() {
    const { onShowAll } = useReporte();
    const [reporte, setReporte] = useState<Reportes[]>([]);
    const [reporteSearch, setReporteSearch] = useState<Reportes[]>([]);
    const { getParams } = useUtils();

    useEffect(() => {
        const loadUsoLab = async () => {
            await onShowAll(0).then(({ data }) => {
                setReporte(() => {
                    setReporteSearch(data);
                    return data;
                });
            });
        };

        loadUsoLab();
    }, []);

    const setReportesAndSearch = (data: Reportes[]) => {
        setReporte(() => {
            setReporteSearch(data);
            return data;
        });
    };

    const onFilteredUsoLab = async (fields: Reportes) => {
        const params: any = getParams(fields);
        console.log(params);

        await onShowAll(params).then(({ data }) => {
            setReportesAndSearch(data);
        });
    };

    return (
        <div>
            <div className="min-h-screen">
                <h1 className="mb-6 text-3xl font-bold text-center">Reportes</h1>
                <div className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded-md">
                    <div className="flex items-center space-x-2">
                        <BtnFilterReportes
                            onFilteredLabUse={(value: Reportes) => {
                                onFilteredUsoLab(value);
                            }}
                        />
                    </div>
                </div>

                <TableReportes
                    reporte={reporteSearch}
                />
            </div>
        </div>
    );
}

export default LabUsePage;