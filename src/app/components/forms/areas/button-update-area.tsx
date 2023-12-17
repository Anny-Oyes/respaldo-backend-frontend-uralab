"use client";
import { Button, ButtonGroup } from "@nextui-org/react";
import { IconArrowBackUpDouble, IconDeviceFloppy } from "@tabler/icons-react";

export default function ButtonUpdateArea({ close }: { close: any }) {
  const goToAreas = () => {
    close();
  };

  return (
    <ButtonGroup>
      <Button color="warning" onClick={goToAreas}>
        <IconArrowBackUpDouble />
        Cancelar
      </Button>
      <Button type="submit" color="primary">
        <IconDeviceFloppy />
        Actualizar
      </Button>
    </ButtonGroup>
  );
}
