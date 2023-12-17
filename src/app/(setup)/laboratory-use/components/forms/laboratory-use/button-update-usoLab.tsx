"use client";
import { Button, ButtonGroup } from "@nextui-org/react";
import { IconArrowBackUpDouble, IconDeviceFloppy } from "@tabler/icons-react";

export default function ButtonUpdateUsoLab({ close }: { close: any }) {
  const goToUsoLab = () => {
    close();
  };

  return (
    <ButtonGroup>
      <Button color="warning" onClick={goToUsoLab}>
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
