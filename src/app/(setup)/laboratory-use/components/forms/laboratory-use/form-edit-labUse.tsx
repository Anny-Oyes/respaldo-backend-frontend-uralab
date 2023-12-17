"use client";

import FieldsLabUse from "./fields-labUse";
import ButtonUpdateLabUse from "../../buttons/button-update-labUse";
import { updateLabUse } from "../../../actions/post/save-labUse";

export default function FormEditLabUse({
    usoLaboratorios,
    closeModals,
}: {
    usoLaboratorios: any;
    closeModals: any;
}) {
    const actualizarLabUse = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.target as HTMLFormElement);
        const id = usoLaboratorios?.id;
        const data = await updateLabUse(id, form);
        console.log(data);

        closeModals(data);
    };
    return (
        <form onSubmit={actualizarLabUse}>
            <div>
                <FieldsLabUse usoLaboratorios={usoLaboratorios} />
                <div className="flex justify-end">
                    <ButtonUpdateLabUse close={closeModals} />
                </div>
            </div>
        </form>
    );
}