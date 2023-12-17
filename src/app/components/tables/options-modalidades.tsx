import { IconPencilMinus, IconTrash } from "@tabler/icons-react";
import Link from "next/link";

export default function OptionsModalidades({ id }: { id: string }) {
  return (
    <div className='flex justify-end'>
      <Link href={`/modalidades/delete/${id}`}>
        <IconTrash color='red' />
      </Link>
      <Link href={`/modalidades/edit/${id}`}>
        <IconPencilMinus color='lime' />
      </Link>
    </div>
  );
}
