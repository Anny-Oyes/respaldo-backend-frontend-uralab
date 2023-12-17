"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Switch,
} from "@nextui-org/react";
import { useState } from "react";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { useAreas } from "@/app/hooks/use-area";
import { Area } from "@/app/interfaces/areas-interfaces";
import FieldsAreass from "@/app/components/areas/fields-area";


interface BtnAddAreaProps {
  onSaved: (data: Area) => void;
}
export default function BtnAddArea({ onSaved }: BtnAddAreaProps) {
  const [fields, setFields] = useState<Area>({} as Area);

  const handleChangeArea = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
  };
  const { onStore } = useAreas();


  

  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(!isOpen);
    setFields({} as Area);
  };

  const handleOnStore = async () => {
    const rest = await onStore(fields);
    return rest;
  };

  return (
    <>
      <Button variant="light" size="sm" color="primary" onPress={onOpen}>
        Agregar Area
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
                Datos de la area
              </ModalHeader>
              <ModalBody>
                <div>
                  <FieldsAreass onChangeArea={handleChangeArea} />
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
