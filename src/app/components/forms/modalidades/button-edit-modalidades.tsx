"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { IconPencilMinus } from "@tabler/icons-react";
import useModalidades from "@/app/hooks/use-modalidades";
import { Modalidades } from "@/app/interfaces/modalidades-interface";
import FieldsModalidad from "../../modalidades/fields-modalidades";
interface ButtonEditModalidadesProps {
  id: number;
  onSaved: (e: any) => void;
}
export default function ButtonEditModalidades({
  id,
  onSaved,
}: ButtonEditModalidadesProps) {
  const { onUpdate, onShow } = useModalidades();

  const [fields, setFields] = useState<Modalidades>({} as Modalidades);

  const [isOpen, setIsOpen] = useState(false);

  const loadData = async (id: number) => {
    const { data } = await onShow(id);

    setFields(data);
    setTimeout(() => {
      onOpen();
    }, 200);
  };

  const onOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeModalidades = ({ clave, valor }: any) => {
    setFields({ ...fields, [clave]: valor });
  };

  const handleOnStore = async () => {
    const rest = await onUpdate(id, fields);
    return rest;
  };

  const handleOnClick = async (e: any) => {
    await loadData(id);
  };

  const handleOnClickSaved = async (e: any) => {
    const { data } = await handleOnStore();
    onSaved(data);
  };

  return (
    <>
      <Button
        onPress={async (e) => {
          await handleOnClick(e);
        }}
        variant='light'
        size='sm'
      >
        <IconPencilMinus color='lime' />
      </Button>
      {isOpen && (
        <Modal isOpen={isOpen} onOpenChange={onOpen} backdrop='blur'>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex flex-col gap-1'>
                  Editar Modalidad
                </ModalHeader>
                <ModalBody>
                  <div>
                    {fields.id && (
                      <FieldsModalidad
                        modalidades={fields}
                        onChangeModalidades={handleChangeModalidades}
                      />
                    )}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color='danger' variant='light' onPress={onClose}>
                    Cancelar
                  </Button>
                  <Button
                    color='primary'
                    onPress={async (e) => {
                      await handleOnClickSaved(e);
                      setTimeout(() => {
                        onClose();
                      }, 200);
                    }}
                  >
                    Actualizar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
