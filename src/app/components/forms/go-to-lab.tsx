"use client";
import { redirect } from "next/navigation";

export default function GoToLabs() {
    const goto = () => {
        console.log('probanaod');
    
        redirect("/labs");
        };
        return (
        <button type="button" onClick={goto}>
            Cancelar
        </button>
    );
}
