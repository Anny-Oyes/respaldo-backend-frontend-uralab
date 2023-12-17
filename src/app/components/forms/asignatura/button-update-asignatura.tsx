"use client";
import { Button, ButtonGroup } from "@nextui-org/react";
import { IconArrowBackUpDouble, IconDeviceFloppy } from "@tabler/icons-react";

export default function ButtonUpdateAsignatura({ close }: { close: any }) {
  const goToAsignatura = () => {
    close();
  };

  return (
    <ButtonGroup>
      <Button color="warning" onClick={goToAsignatura}>
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
