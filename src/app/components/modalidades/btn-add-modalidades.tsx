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

import { Modalidades } from "@/app/interfaces/modalidades-interface";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { useState } from "react";
import useModalidades from "@/app/hooks/use-modalidades";
import FieldsModalidades from "./fields-modalidades";

interface BtnAddModalidadesProps {
  onSaved: (data: Modalidades) => void;
}

export default function BtnAddModalidades({ onSaved }: BtnAddModalidadesProps) {
  const [fields, setFields] = useState<Modalidades>({} as Modalidades);
  const handleChangeModalidades = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
  };

  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(!isOpen);
    setFields({} as Modalidades);
  };

  const { onStore } = useModalidades();

  const handleOnStore = async () => {
    const rest = await onStore(fields);
    return rest;
  };

  return (
    <>
      <Button variant='light' size='sm' color='primary' onPress={onOpen}>
        Agregar Modalidad
      </Button>
      <Modal
        placement='top'
        backdrop='blur'
        isOpen={isOpen}
        onOpenChange={onOpen}
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Datos de la modalidad
              </ModalHeader>
              <ModalBody>
                <div>
                  <FieldsModalidades
                    onChangeModalidades={handleChangeModalidades}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  color='primary'
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
