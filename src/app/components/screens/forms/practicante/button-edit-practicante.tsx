"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getPracticante } from "../../actions/post/save-practicantes";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  ModalFooter,
} from "@nextui-org/react";
import { IconPencilMinus } from "@tabler/icons-react";
import FormEditPracticante from "./form-edit-practicante";
import Practicante from "./interface/practicante";
import { setterData } from "@/app/interfaces/setter-interfaces";

interface ButtonEditPracticanteProps {
  id: number;
  onSaved: (e: any) => void;
}

export default function ButtonEditPracicante({id, onSaved}:ButtonEditPracticanteProps) {

  const [fields, setFields] = useState<Practicante>({} as Practicante);
  const [ isOpen, setIsOpen]  = useState(false);
const loadData = async (id: number) => {
  const { data } = await getPracticante(id);

  setFields(data);
  setTimeout(() => {
    onOpen();
  }, 200);
}

  const onOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleChangePracticante = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
  }

  const handleOnStore = async () => {
    const rest = await getPracticante(id);
    return rest;
  }

  const handleOnClickSave = async (e: any) => {
    await loadData(id);
  }

  const handleOnClickSaved = async (e: any) => {
    const { data } = await handleOnStore();
    onSaved(data);
  }
  return (
    <>
      <Button
        onPress={ async () => {
          await handleOnClickSave(id);
        }}
        variant="light"
        size="sm"
      >
        <IconPencilMinus color="lime" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpen} backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Editar Practicante
              </ModalHeader>
              <ModalBody>
                <div>
                  {fields && (
                    <FormEditPracticante
                      practicante={fields}
                      onChengaPracticante={handleChangePracticante}
                    />
                  )
                  }
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    handleOnClickSaved(id);
                    onClose();
                  }}
                >
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
