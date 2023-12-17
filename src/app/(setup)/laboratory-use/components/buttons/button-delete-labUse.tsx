"use client";
import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import {
    IconArrowBackUpDouble,
    IconCheck,
    IconTrash,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { deteleLabUseById } from "../../actions/post/save-labUse";

export default function ButtonDeleteLabUse({ id }: { id: string }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const router = useRouter();

    const deleteLabUse = async (id: string) => {
        await deteleLabUseById(parseInt(id));
        router.refresh();
    };

    return (
        <>
            <Button onPress={onOpen} variant="light" size="sm">
                <IconTrash color="red" />
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-row justify-start">
                                <IconTrash color="red" /> Eliminar Registro de uso del Laboratorio
                            </ModalHeader>
                            <ModalBody>
                                <h1>¿Está seguro que desea eliminar el registro del uso de laboratorio con id {id}?</h1>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    <IconArrowBackUpDouble color="red" />
                                    Cancelar
                                </Button>
                                <Button
                                    color="primary"
                                    onClick={() => {
                                        deleteLabUse(id);
                                        onClose();
                                    }}
                                >
                                    <IconCheck color="lime" />
                                    Si
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
