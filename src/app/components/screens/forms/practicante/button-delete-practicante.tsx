"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { deletePracticanteById } from '../../actions/post/save-practicantes';
import {
  IconArrowBackUpDouble,
  IconCheck,
  IconTrash,
} from "@tabler/icons-react";
import Practicante from "./interface/practicante";
import { usePracticante } from "@/app/hooks/use-practicante";

interface ButtonDeletePracticanteProps {
  id: number;
  onDeleted: (e: Practicante) => void;
}


export default function ButtonDeletePracticante(
  { id, onDeleted }: ButtonDeletePracticanteProps
) {
  const { onDelete } = usePracticante();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  const deletPracticante = async (id: number) => {
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
              <ModalHeader className=" flex flex-row justify-start">
                <IconTrash color="red" /> Eliminar Practicante
              </ModalHeader>
              <ModalBody>
                <h1>
                  ¿Está seguro que desea eliminar el practicante con id {id}?
                </h1>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    <IconArrowBackUpDouble color="red" />
                    Cancelar
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => {
                      deletPracticante(id);
                      onClose();
                    }}
                  >
                    <IconCheck color="lime" />
                    Si
                  </Button>
                </ModalFooter>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
