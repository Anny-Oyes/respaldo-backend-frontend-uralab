import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { Reportes } from "@/app/interfaces/reportes-interfaces";
import FieldsReportes from "./fields-reporte";

interface BtnFilterReportesProps {
  onFilteredLabUse: (fields: Reportes) => void;
}

const BtnFilterReportes = ({ onFilteredLabUse }: BtnFilterReportesProps) => {
  const [fields, setFields] = useState<Reportes>({} as Reportes);
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };

  const setChangeFields = (value: setterData) => {
    setFields({ ...fields, [value.clave]: value.valor });
  };

  const onFilteredReportes = () => {
    onFilteredLabUse(fields);
  };

  return (
    <>
      <Button onPress={onOpen}>Buscar Reporte</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Reportes
              </ModalHeader>
              <ModalBody>
                <div>
                  <FieldsReportes reporte={fields} onChangeReporte={setChangeFields} />
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
                      onFilteredLabUse({} as Reportes);
                      return {} as Reportes;
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
                    onFilteredReportes();
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

export default BtnFilterReportes;