"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,

} from "@nextui-org/react";
import { useState } from "react";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { UsoLab } from "@/app/interfaces/usoLab-interfaces";
import { useLaboratorio } from "@/app/hooks/uso-lab";
import FieldsUsoLab from "./fields-UsoLab";


interface BtnAddUsoLabProps {
  onSavedUsoLab: (data: UsoLab) => void;
}
export default function BtnAddUsoLab({ onSavedUsoLab }: BtnAddUsoLabProps) {
  const [fields, setFields] = useState<UsoLab>({} as UsoLab);
  const handleChangeUsoLab = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    console.log(fields);
  };
  const { onStore } = useLaboratorio();

  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(!isOpen);
    setFields({} as UsoLab);
  };

  const handleOnStore = async () => {
    const rest = await onStore(fields);
    console.log('Hola esto es una prueba');
    return rest;
  };

  return (
    <>
      <Button variant="light" size="sm" color="primary" onPress={onOpen}>
        Agregar Uso del Laboratorio
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
              <ModalHeader className="flex flex-col gap-1">
                Datos del Uso Laboratorio
              </ModalHeader>
              <ModalBody>
                <div>
                  <FieldsUsoLab onChangeUsoLab={handleChangeUsoLab} />
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
                    console.log(data)
                    if (data) {
                      onSavedUsoLab(data);
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
