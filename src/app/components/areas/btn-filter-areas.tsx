import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
  } from "@nextui-org/react";
  import FieldsAreass from "./fields-area";
  import { useState } from "react";
  import { Area } from "@/app/interfaces/areas-interfaces";
  import { setterData } from "@/app/interfaces/setter-interfaces";
  
  interface BtnFilterAreasProps {
    onFilteredAreas: (fields: Area) => void;
  }
  
  const BtnFilterAreas = ({ onFilteredAreas} : BtnFilterAreasProps) => {
    const [fields, setFields] = useState<Area>({} as Area);
    const [isOpen, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onOpenChange = (open: boolean) => {
      setOpen(open);
    };
  
    const setChangeFields = (value: setterData) => {
      setFields({ ...fields, [value.clave]: value.valor });
    };
  
    const onFilterAreas = () => {
      onFilteredAreas(fields);
      console.log(fields);     
    };
  
    return (
      <>
        <Button onPress={onOpen}>Buscar Areas</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Area Modal Title
                </ModalHeader>
                <ModalBody>
                  <div>
                    <FieldsAreass area={fields} onChangeArea={setChangeFields} />
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
                        onFilteredAreas({} as Area);
                        return {} as Area;
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
                      onFilterAreas(); 
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
  
  export default BtnFilterAreas;
  