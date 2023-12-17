import Practicante from "../screens/forms/practicante/interface/practicante";
import { useState } from "react";
import { usePracticante } from "@/app/hooks/use-practicante";
import FieldsPracticante from "../screens/forms/practicante/fields-practicante";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";

interface BtnAddPracticanteProps {
    onSaved: (data: Practicante) => void;
}

export default function BtnAddPracticante({ onSaved }: BtnAddPracticanteProps) {
    const [fields, setFields] = useState<Practicante>({} as Practicante);
    const { onSave } = usePracticante();//llamo a la funcion de guardar practicante
    
    const handleChangePracticante = ({ clave, valor }: setterData) => {
        setFields({ ...fields, [clave]: valor });  
        console.log(fields);       
    };

    const handleOnStore = async () => {
        const rest = await onSave(fields); 
        console.log(rest);
        return rest;
    };
    const [isOpen, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(!isOpen);
        setFields({} as Practicante);
    };
    
    
    return (
        <>
            <Button variant="light" size="sm" color="primary" onPress={onOpen}>
                Agregar Practicante
            </Button>
            <Modal
                placement="top"
                backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpen}
                isDismissable={false}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                Datos del practicante
                            </ModalHeader>
                            <ModalBody>
                                <div>
                                    <FieldsPracticante onChangePracticante={handleChangePracticante} />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button
                                    color="primary"
                                    onPress={async (e) => {
                                        const { data } = await handleOnStore();

                                        if (data.id) {
                                            onSaved(data);
                                            onClose();
                                        }
                                    }}
                                >
                                    Guardar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}