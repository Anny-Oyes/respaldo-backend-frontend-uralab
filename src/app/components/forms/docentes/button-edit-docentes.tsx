"use client";
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { IconPencilMinus } from "@tabler/icons-react";
import { getAreas as getDocente } from "@/app/actions/post/save-areas";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import FormEditDocente from "./form-edit-docentes";

export default function ButtonEditDocente({ id }: { id: string }) {
  const router = useRouter();
  const [field, setFields] = useState({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const loadData = async (id: number) => {
    const datos = await getDocente(id);
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
              <ModalHeader className="flex flex-col gap-1">Editar Docente</ModalHeader>
              <ModalBody>
                <FormEditDocente
                  field={field}
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
