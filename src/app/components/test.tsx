"use client"; // Error components must be Client Components
import { Alert } from "flowbite-react";
import { Dropdown } from "flowbite-react";

export default function Alerta() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Alert color="info">
          <span>
            <span className="font-medium">Flowbite </span> 
            with NextJS using Tailwind CSS
          </span>
        </Alert>
      </div>
    </>
  );
}
