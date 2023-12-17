"use client";
import { redirect } from "next/navigation";

export default function GoToLabUse() {
    const goto = () => {
        console.log('probanaod');

        redirect("/laboratory-use");
    };
    return (
        <button type="button" onClick={goto}>
            Cancelar
        </button>
    );
}