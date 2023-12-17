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
import { useState } from "react";
import { useRoles } from "@/app/hooks/use-roles";
import { Role } from "@/app/interfaces/roles-interfaces";
import FieldsRols from "@/app/components/roles/fields-rols";
import { setterData } from "@/app/interfaces/setter-interfaces";


interface BtnAddRoleProps {
  onSaved: (data: Role) => void;
}
export default function BtnAddRole({ onSaved }: BtnAddRoleProps) {
  const [fields, setFields] = useState<Role>({} as Role);
  const handleChangeRole = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
  };
  const { onStore } = useRoles();

  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(!isOpen);
    setFields({} as Role);
  };

  const handleOnStore = async () => {
    const rest = await onStore(fields);
    return rest;
  };

  return (
    <>
      <Button variant="light" size="sm" color="primary" onPress={onOpen}>
        Agregar Rol
      </Button>
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
                Datos del rol
              </ModalHeader>
              <ModalBody>
                <div>
                  <FieldsRols onChangeRole={handleChangeRole} />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  color="primary"
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
