import { IconPencilMinus, IconTrash } from "@tabler/icons-react";
import Link from "next/link";

export default function OptionsLabUse({ id }: { id: string }) {
  return (
    <div className="flex justify-end">
      <Link href={`/uselab/delete/${id}`}>
        <IconTrash color="red" />
      </Link>
      <Link href={`/uselab/edit/${id}`}>
        <IconPencilMinus color="lime" />
      </Link>
    </div>
  );
}
