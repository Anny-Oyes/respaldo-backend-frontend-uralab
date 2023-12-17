"use client";
import { Button, ButtonGroup } from "@nextui-org/react";
import { IconArrowBackUpDouble, IconDeviceFloppy } from "@tabler/icons-react";
export default function ButtonUpdatePracticante({ close }: { close: any }) {
  const goToPracticantes = () => {
    close();
  };

  return (
    <ButtonGroup>
      <Button color="warning" onClick={goToPracticantes}>
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
