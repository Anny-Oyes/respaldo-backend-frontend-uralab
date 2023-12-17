"use client";

import { ButtonGroup } from "@nextui-org/react";
import { IconDeviceFloppy } from "@tabler/icons-react";
import { IconArrowBackUpDouble } from "@tabler/icons-react";
import { Button } from "flowbite-react";

export default function ButtonUpdateCorte({ close }: { close: any }) {
  const goToCortes = () => {
    close();
  };

  return (
    <ButtonGroup>
      <Button color="warning" onClick={goToCortes}>
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
