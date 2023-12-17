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
import { useRouter } from "next/navigation";
import { deteteModalidadById } from "../../screens/actions/post/save-modalidades";
import { Modalidades } from "@/app/interfaces/modalidades-interface";
import useModalidades from "@/app/hooks/use-modalidades";

interface ButtonDeleteMoProps {
  id: number;
  onDeleted: (e: Modalidades) => void;
}

export default function ButtonDeleteModalidades({
  id,
  onDeleted,
}: ButtonDeleteMoProps) {
  const { onDelete } = useModalidades();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  const deleteModalidad = async (id: number) => {
    const { data } = await onDelete(id);
    onDeleted(data);
  };

  return (
    <>
      <Button onPress={onOpen} variant='light' size='sm'>
        <IconTrash color='red' />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-row justify-start'>
                <IconTrash color='red' /> Eliminar Modalidad
              </ModalHeader>
              <ModalBody>
                <h1>
                  ¿Está seguro que desea eliminar la modalidad con id {id}?
                </h1>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  <IconArrowBackUpDouble color='red' />
                  Cancelar
                </Button>
                <Button
                  color='primary'
                  onClick={() => {
                    deleteModalidad(id);
                    onClose();
                  }}
                >
                  <IconCheck color='lime' />
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
