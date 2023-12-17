import { setterData } from "@/app/interfaces/setter-interfaces";
import Practicante from "../screens/forms/practicante/interface/practicante";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";

interface FildsPracticanteProps{
    practicante?: Practicante;
    onChangePracticante: (value: setterData) => void;
}
export default function FildsPracticantes(
    {practicante, onChangePracticante}: FildsPracticanteProps = {
        practicante: {} as Practicante,
        onChangePracticante: () => {},
    }
) {
    const [fields, setFields] = useState<Practicante>({} as Practicante);
    const handleChangePracticante = ({ clave, valor }: setterData) => {
        setFields({...fields, [clave]: valor});
        onChangePracticante({clave, valor});
    }

    useEffect(()=>{
        if(practicante){
            setFields(practicante || ({} as Practicante));
        }
    }, [practicante])
    return (
        <div>
            <div className="w-full flex flex-col gap-4">
                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">                    
                </div>
                <Input
                    size="sm"
                    type="text"
                    label="Nombres"
                    name="nombres"
                    placeholder="Escriba un nombre..."
                    defaultValue={practicante?.nombres}
                    onChange={(e) => {
                        const data: setterData = {
                            clave: e.target.name,
                            valor: e.target.value,
                        };
                        handleChangePracticante(data);
                    }}
                />
            </div>
        </div>
    )
}