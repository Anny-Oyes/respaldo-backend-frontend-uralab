import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";
import { Modalidades } from "@/app/interfaces/modalidades-interface";
import { setterData } from "@/app/interfaces/setter-interfaces";
import FieldsModalidad from "./fields-modalidades";

interface BtnFilterModalidadesProps {
  onFilteredModalidades: (fields: Modalidades) => void;
}

const BtnFilterModalidades = ({
  onFilteredModalidades,
}: BtnFilterModalidadesProps) => {
  const [fields, setFields] = useState<Modalidades>({} as Modalidades);
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };

  const setChangeFields = (value: setterData) => {
    setFields({ ...fields, [value.clave]: value.valor });
  };

  const onFilterRoles = () => {
    onFilteredModalidades(fields);
  };

  return (
    <>
      <Button onPress={onOpen}>Buscar Modalidades</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Modal Title
              </ModalHeader>
              <ModalBody>
                <div>
                  <FieldsModalidad
                    modalidades={fields}
                    onChangeModalidades={setChangeFields}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color='danger'
                  variant='light'
                  onPress={() => {
                    setTimeout(() => {
                      onClose();
                    }, 200);

                    setFields(() => {
                      onFilteredModalidades({} as Modalidades);
                      return {} as Modalidades;
                    });
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  color='success'
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

export default BtnFilterModalidades;
