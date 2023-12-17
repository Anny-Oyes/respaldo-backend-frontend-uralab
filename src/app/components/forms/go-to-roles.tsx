"use client";
import { redirect } from "next/navigation";

export default function GoToRoles() {
      const goto = () => {
      console.log('probanaod');
    
    redirect("/roles");
  };
  return (
    <button type="button" onClick={goto}>
      Cancelar
    </button>
  );
}
