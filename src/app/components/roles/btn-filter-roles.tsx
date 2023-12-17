import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import FieldsRols from "./fields-rols";
import { useState } from "react";
import { Role } from "@/app/interfaces/roles-interfaces";
import { setterData } from "@/app/interfaces/setter-interfaces";

interface BtnFilterRolesProps {
  onFilteredRoles: (fields: Role) => void;
}

const BtnFilterRoles = ({ onFilteredRoles }: BtnFilterRolesProps) => {
  const [fields, setFields] = useState<Role>({} as Role);
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };

  const setChangeFields = (value: setterData) => {
    setFields({ ...fields, [value.clave]: value.valor });
  };

  const onFilterRoles = () => {
    onFilteredRoles(fields);
  };

  return (
    <>
      <Button onPress={onOpen}>Buscar Roles</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <div>
                  <FieldsRols role={fields} onChangeRole={setChangeFields} />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    setTimeout(() => {
                      onClose();
                    }, 200);

                    setFields(() => {
                      onFilteredRoles({} as Role);
                      return {} as Role;
                    });
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  color="success"
                  onPress={() => {
                    setTimeout(() => {
                      onClose();
                    }, 200);
                    onFilterRoles();
                  }}
                >
                  Filtrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BtnFilterRoles;
