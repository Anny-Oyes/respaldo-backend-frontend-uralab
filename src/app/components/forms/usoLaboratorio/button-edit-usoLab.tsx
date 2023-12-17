"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { IconPencilMinus } from "@tabler/icons-react";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { UsoLab } from "@/app/interfaces/usoLab-interfaces";
import { useLaboratorio } from "@/app/hooks/uso-lab";
import FieldsUsoLab from "./fields-UsoLab";


interface ButtonEditUsoLabProps {
  id: number;
  onSaved: (e: UsoLab) => void;
}
export default function ButtonEditUsoLab({ id, onSaved }: ButtonEditUsoLabProps) {
  const { onUpdate, onShow } = useLaboratorio();

  const [fields, setFields] = useState<UsoLab>({} as UsoLab);

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

  const handleChangeUsoLab = ({ clave, valor }: setterData) => {
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
        variant="light"
        size="sm"
      >
        <IconPencilMinus color="lime" />
      </Button>
      {isOpen && (
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
                  Editar Registro de Laboratorio
                </ModalHeader>
                <ModalBody>
                  <div>
                    {fields.id && (
                      <FieldsUsoLab
                      usoLaboratorio={fields}
                      onChangeUsoLab={handleChangeUsoLab}
                      />
                    )}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancelar
                  </Button>
                  <Button
                    color="primary"
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
