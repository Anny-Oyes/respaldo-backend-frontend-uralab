"use client";

import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { IconPencilMinus } from "@tabler/icons-react";
import { getLab} from "@/app/actions/post/save-lab";
import { useRouter } from "next/navigation";
import FormEditLab from "./form-edit-lab";

export default function ButtonEditLab({ id }: { id: string }) {
  const router = useRouter();
  const [field, setFields] = useState({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const loadData = async (id: number) => {
    const datos = await getLab(id);
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
              <ModalHeader className="flex flex-col gap-1">Editar registro de laboratorio</ModalHeader>
              <ModalBody>
                <FormEditLab
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
