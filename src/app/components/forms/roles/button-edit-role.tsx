"use client";
import React, { useEffect, useState } from "react";
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
import FormEditRole from "./form-edit-role";
import { getRoles } from "@/app/actions/post/save-roles";
import { useRouter } from "next/navigation";
import FieldsRols from "../../roles/fields-rols";
import { Role } from "@/app/interfaces/roles-interfaces";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { useRoles } from "@/app/hooks/use-roles";

interface ButtonEditRoleProps {
  id: number;
  onSaved: (e: Role) => void;
}
export default function ButtonEditRole({ id, onSaved }: ButtonEditRoleProps) {
  const { onUpdate, onShow } = useRoles();

  const [fields, setFields] = useState<Role>({} as Role);

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

  const handleChangeRole = ({ clave, valor }: setterData) => {
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
                  Editar Role
                </ModalHeader>
                <ModalBody>
                  <div>
                    {fields.id && (
                      <FieldsRols
                        role={fields}
                        onChangeRole={handleChangeRole}
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
