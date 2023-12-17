"use client";
import React, { useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import { IconPencilMinus } from "@tabler/icons-react";

import { useRouter } from "next/navigation";
import FormEditLabUse from "../forms/laboratory-use/form-edit-labUse";
import { getLabUse } from "../../actions/post/save-labUse";

export default function ButtonEditLabUse({ id }: { id: string }) {
    const router = useRouter();
    const [usoLaboratorios, setUsoLaboratorios] = useState({});
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const loadDatas = async (id: number) => {
        const datos = await getLabUse(id);
        setUsoLaboratorios(datos);
    };

    return (
        <>
            <Button
                onPress={() => {
                    onOpen();
                    loadDatas(parseInt(id));
                }}
                variant="light"
                size="sm"
            >
                <IconPencilMinus color="lime" />
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} >
                <ModalContent>
                    {(onClose) => (
                        < div className="w-full max-w-lg p-4">
                            <ModalHeader className="flex flex-col gap-1">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-xl font-semibold">Editar el registro de uso del laboratorio</h2>
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <FormEditLabUse
                                    usoLaboratorios={usoLaboratorios}
                                    closeModals={(e: any) => {
                                        onClose();
                                        setUsoLaboratorios({});
                                        router.refresh();
                                    }}
                                />
                            </ModalBody>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
