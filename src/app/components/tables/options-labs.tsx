import { ButtonGroup } from "@nextui-org/react";
import { IconPencilMinus, IconTrash } from "@tabler/icons-react";
import Link from "next/link";

export default function OptionsLabs({ id }: { id: string }) { 
    return (
    <div className="flex justify-end">
        <Link href={`/labregirter/delete/${id}`}> 
            <IconTrash color="red" />
        </Link>
        <Link href={`/labregirter/edit/${id}`}>
            <IconPencilMinus  color="lime"/> 
        </Link>
    </div>
    );
}
