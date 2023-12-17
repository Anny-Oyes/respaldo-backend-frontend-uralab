"use client";
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { IconPencilMinus } from "@tabler/icons-react";
import FormEditCarrera from "./form-edit-carrera";
import { useRouter } from "next/navigation";
import { getCarreras } from "@/app/actions/post/save-carreras";

export default function ButtonEditCarrera({ id }: { id: string }) {
  const router = useRouter();
  const [fields, setFields] = useState({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const loadData = async (id: number) => {
    const datos = await getCarreras(id);
    setFields(datos);
  };

  return (
    <>
      <Button
        onPress={() => {
          onOpen();
          loadData(parseInt(id));
        }}
        variant="light"
        size="sm"
      >
        <IconPencilMinus color="lime" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Editar Carrera</ModalHeader>
              <ModalBody>
                <FormEditCarrera
                  fields={fields}
                  closeModal={(e: any) => {
                    onClose();
                    setFields({});
                    router.refresh();
                  }}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
