import { useState } from "react";
import Practicante from "../screens/forms/practicante/interface/practicante";
import { setterData } from "@/app/interfaces/setter-interfaces";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import FieldsPracticantesSearch from "../screens/forms/practicante/fields-practicante-search";

interface BtnFilterPracticanteProps {
  onFilteredPracticante: (fields: Practicante) => void;
}
const BtnFilterPracticante = ({onFilteredPracticante}: BtnFilterPracticanteProps) => {
  
  const [fields, setFields] = useState<Practicante>({} as Practicante);
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };
  
  const setChangeFields = (value: setterData) => {
    setFields({ ...fields, [value.clave]: value.valor });
  };

  const onFilterPracticante = () => {
    onFilteredPracticante(fields);
  };
  return (
    <>
      <Button onPress={onOpen}>Buscar Practicante</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Buscar Practicante
              </ModalHeader>
              <ModalBody>
                <div>
                  <FieldsPracticantesSearch practicante={fields} onChangePracticante={setChangeFields}
                  />
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
                        onFilteredPracticante({} as Practicante);
                        return {} as Practicante;
                        });
                    }}
                    >
                    Cancelar
                    </Button>
                    <Button color="success" onPress={onFilterPracticante}>
                    Buscar
                    </Button>
                </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BtnFilterPracticante;
