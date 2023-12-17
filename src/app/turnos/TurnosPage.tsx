"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { getAllTurnos } from "../(setup)/laboratory-use/actions/post/save-labUse";

interface Turno {
  id: number;
  name: string;
}

const Turnos = (): JSX.Element => {
  const [turnos, setTurnos] = useState<Turno[]>([]);
  const [nuevoTurno, setNuevoTurno] = useState<string>("");
  const [editTurno, setEditTurno] = useState<Turno | null>(null);
  const [editTurnoName, setEditTurnoName] = useState<string>(""); // Nuevo estado para el input de edición
 
  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await fetch("http://localhost:5003/turnos");
        const data: Turno[] = await response.json();
        setTurnos(data);
      } catch (error) {
        console.error("Error fetching turnos:", error);
      }
    };

    fetchTurnos();
  }, []);

  const handleAgregarTurno = async () => {
    try {
      const response = await fetch("http://localhost:5003/turnos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: nuevoTurno }),
      });

      const nuevoTurnoData: Turno = await response.json();

      setTurnos([...turnos, nuevoTurnoData]);
      setNuevoTurno("");
    } catch (error) {
      console.error("Error adding turno:", error);
    }
  };

  const handleEditarTurno = (turno: Turno) => {
    setEditTurno(turno);
    setEditTurnoName(turno.name); // Inicializar el estado del input de edición con el nombre actual del turno
    setNuevoTurno(""); // Limpiar el input de agregar turno
  };

  const handleActualizarTurno = async () => {
    try {
      if (editTurno) {
        const response = await fetch(
          `http://localhost:5003/turnos/${editTurno.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: editTurnoName }), // Usar editTurnoName en lugar de nuevoTurno
          }
        );

        const updatedTurno: Turno = await response.json();

        setTurnos((prevTurnos) =>
          prevTurnos.map((t) => (t.id === updatedTurno.id ? updatedTurno : t))
        );

        setEditTurno(null);
        setNuevoTurno("");
      }
    } catch (error) {
      console.error("Error updating turno:", error);
    }
  };

  const handleEliminarTurno = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5003/turnos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setTurnos((prevTurnos) => prevTurnos.filter((t) => t.id !== id));
      } else {
        console.error("Error deleting turno");
      }
    } catch (error) {
      console.error("Error deleting turno:", error);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Turnos</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nombre</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno: any) => (
            <tr key={turno.id}>
              <td className="py-2 px-4 border-b">{turno.id}</td>
              <td className="py-2 px-4 border-b">
                {editTurno?.id === turno.id ? (
                  <input
                    type="text"
                    value={editTurnoName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setEditTurnoName(e.target.value)
                    }
                    className="p-2 border border-gray-300 bg-gray-100 text-gray-800 mr-2"
                  />
                ) : (
                  turno.name
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {editTurno?.id === turno.id ? (
                  <>
                    <button
                      onClick={handleActualizarTurno}
                      className="bg-green-500 text-white py-1 px-2 rounded mr-2"
                    >
                      Guardar
                    </button>
                    <button
                      onClick={() => setEditTurno(null)}
                      className="bg-gray-500 text-white py-1 px-2 rounded"
                    >
                      Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEditarTurno(turno)}
                      className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleEliminarTurno(turno.id)}
                      className="bg-red-500 text-white py-1 px-2 rounded"
                    >
                      Borrar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <input
          type="text"
          value={nuevoTurno}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNuevoTurno(e.target.value)
          }
          className="p-2 border border-gray-300 bg-gray-100 text-gray-800 mr-2"
        />
        <button
          onClick={handleAgregarTurno}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Agregar Turno
        </button>
      </div>
    </div>
  );
};

export default Turnos;
