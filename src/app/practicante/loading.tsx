"use client";
import { Button, Skeleton } from "@nextui-org/react";

export default function LoadingPage() {
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="mb-3">Listado de Practicante</h1>

        <div className="mb-3 flex content-end justify-items-end">
          <Skeleton className="rounded-lg">
            <Button variant="light" size="sm" color="primary">
              Agregar Practicante
            </Button>
          </Skeleton>
        </div>

        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <Skeleton className="w-full">
              <div className="w-full h-10">Probando</div>
            </Skeleton>
            <Skeleton className="w-full border-t-0 mt-0">
              <div className="w-full h-7">Probando</div>
            </Skeleton>
            <Skeleton className="w-full border-t-0 mt-0">
              <div className="w-full h-7">Probando</div>
            </Skeleton>
            <Skeleton className="w-full border-t-0">
              <div className="w-full h-7">Probando</div>
            </Skeleton>
            <Skeleton className="w-full border-t-0">
              <div className="w-full h-7">Probando</div>
            </Skeleton>
            <Skeleton className="w-full border-t-0">
              <div className="w-full h-7">Probando</div>
            </Skeleton>
            <Skeleton className="w-full border-t-0">
              <div className="w-full h-7">Probando</div>
            </Skeleton>
            <Skeleton className="w-full border-t-0">
              <div className="w-full h-7">Probando</div>
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
}
