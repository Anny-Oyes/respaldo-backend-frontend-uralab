"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {
  IconArrowBackUpDouble,
  IconCheck,
  IconTrash,
} from "@tabler/icons-react";
import { deteteRoleById } from "@/app/actions/post/save-roles";
import { useRouter } from "next/navigation";
import { useAreas } from "@/app/hooks/use-area";
import { Area } from "@/app/interfaces/areas-interfaces";

interface ButtonDeleteAreaProps {
  id: number;
  onDeleted: (e: Area) => void;
}
export default function ButtonDeleteArea({
  id,
  onDeleted,
}: ButtonDeleteAreaProps) {
  const { onDelete } = useAreas();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  const deleteArea = async (id: number) => {
    const { data } = await onDelete(id);
    onDeleted(data);
  };

  return (
    <>
      <Button onPress={onOpen} variant="light" size="sm">
        <IconTrash color="red" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row justify-start">
                <IconTrash color="red" /> Eliminar Area
              </ModalHeader>
              <ModalBody>
                <h1>¿Está seguro que desea eliminar el area con id {id}?</h1>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  <IconArrowBackUpDouble color="red" />
                  Cancelar
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    deleteArea(id);
                    onClose();
                  }}
                >
                  <IconCheck color="lime" />
                  Si
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
