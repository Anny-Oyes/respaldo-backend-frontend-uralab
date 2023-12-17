"use client";
import { useState, useEffect } from "react";
import { getAllAsignaturas, getAllCarreras, getAllLaboratorio, getAllModalidades,getAllDocentes } from "../../../actions/post/save-labUse";


export default function FieldsLabuse({ usoLaboratorios }: { usoLaboratorios: any }) {

  const [carreras, setCarreras] = useState([]);
  const [asignaturas, setAsignaturas] = useState([]);
  const [docentes, setDocentes] = useState([]);
  const [modalidades, setModalidades] = useState([]);
  const [laboratorios, setLaboratorios] = useState([]);
  const [usoLaboratorio, setUsoLaboratorios] = useState(usoLaboratorios);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carrerasData = await getAllCarreras();
        const asignaturaData = await getAllAsignaturas();
        const docentesData = await getAllDocentes();
        const modalidadesData = await getAllModalidades();
        const laboratoriosData = await getAllLaboratorio();
        setAsignaturas(asignaturaData);
        setCarreras(carrerasData);
        setDocentes(docentesData);

        setModalidades(modalidadesData);
        setLaboratorios(laboratoriosData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Se ejecutará una vez al montar el componente

  const handlerChange = (e: any) => {
    const { data, value } = e.target;

    setUsoLaboratorios({
      ...usoLaboratorio,
      [data]: value,
    });
  };

  return (
    <>
      {/* <input type="hidden" id="id" name="id" defaultValue={usoLaboratorios?.id || ""} /> */}
      <div className="min-h-screen">
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-6">
            <div>
              <label htmlFor="className" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Nombre de la Clase</label>
            </div>
            <select
              id="className"
              name="className"
              onChange={handlerChange}
              className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-900"
            >
              <option value="className" >
                Seleccionar Asignatura
              </option>
              {asignaturas.map((asignatura: any) => (
                <option  key={asignatura.id} value={asignatura.id}  >
                  {asignatura.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <div>
              <label htmlFor="carrera" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Carrera</label>
            </div>
            <select
              id="carrera"
              name="carrera"
              onChange={handlerChange}
              className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-900"
            >
              <option value="carrera" >
                Seleccionar Carrera
              </option>
              {carreras.map((carrera: any) => (
                <option key={carrera.id} value={carrera.id}  >
                  {carrera.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <div>
              <label htmlFor="teacher" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Docente</label>
            </div>
            <select
              name="docente"
              id="docente"
              onChange={handlerChange}
              className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-900"
            >
              <option value="docente" >
                Seleccionar docente
              </option>
              {docentes.map((docente: any) => (
                <option key={docente.id} value={docente.id}  >
                  {docente.nombre} {docente.apellido}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <div>
              <label htmlFor="date" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Fecha</label>
            </div>
            <input
              type="date"
              name="date"
              id="date"
              defaultValue={usoLaboratorios?.date || ""}
              onChange={handlerChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <div>
              <label htmlFor="modality" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Modalidad</label>
            </div>
            <select
              id="modality"
              name="modality"
              onChange={handlerChange}
              className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="modality">
                Seleccionar Modalidad
              </option>
              {modalidades.map((modalidad: any) => (
                <option key={modalidad.id} value={modalidad.id} >
                  {modalidad.modalidad}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            {/* <div>
              <label htmlFor="shift" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">
                Turno
              </label>
            </div>
            <select
              id="shift"
              name="shift"
              onChange={handlerChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="shift">
                Seleccionar Turno
              </option>
              <option>Mañana</option>
              <option>Tarde</option>
              <option>Noche</option>
            </select> */}
            <select
              id="shift"
              name="shift"
              onChange={handlerChange}
              className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-900"
            >
              <option value="shift" >
                Seleccionar Asignatura
              </option>
              {asignaturas.map((asignatura: any) => (
                <option  key={asignatura.id} value={asignatura.id}  >
                  {asignatura.nombre}
                </option>
              ))}
            </select>
          </div>


          <div className="mb-6">
            <div>
              <label htmlFor="year" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Año de la carrera</label>
            </div>
            <input
              type="number"
              name="year"
              id="year"
              defaultValue={usoLaboratorios?.year || ""}
              onChange={handlerChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Año"
              min="1"
              max="5"
            />
          </div>

          <div className="mb-6">
            <div>
              <label htmlFor="semester" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Semestre</label>
            </div>
            <select
              id="semester"
              name="semester"
              onChange={handlerChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="ninguno">
                Seleccionar Semestre
              </option>
              <option value="I SEMESTRE">I SEMESTRE</option>
              <option value="II SEMESTRE">II SEMESTRE</option>
              <option value="III SEMESTRE">III SEMESTRE</option>
              <option value="IV SEMESTRE">IV SEMESTRE</option>
              <option value="V SEMESTRE">V SEMESTRE</option>
              <option value="VI SEMESTRE">VI SEMESTRE</option>
              <option value="VI SEMESTRE">VI SEMESTRE</option>
              <option value="VI SEMESTRE">VII SEMESTRE</option>
              <option value="VI SEMESTRE">VIII SEMESTRE</option>
              <option value="VI SEMESTRE">IX SEMESTRE</option>
              <option value="VI SEMESTRE">X SEMESTRE</option>
              <option value="VI SEMESTRE">XI SEMESTRE</option>
              <option value="VI SEMESTRE">XII SEMESTRE</option>
            </select>
          </div>
          <div className="mb-6">
            <div>
              <label htmlFor="female" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Mujeres</label>
            </div>
            <input
              type="number"
              name="female"
              id="female"
              defaultValue={usoLaboratorios?.female || ""}
              onChange={handlerChange}
              placeholder="Cantidad de Mujeres"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <div>
              <label htmlFor="male" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Varones</label>
            </div>
            <input
              type="number"
              name="male"
              id="male"
              defaultValue={usoLaboratorios?.male || ""}
              onChange={handlerChange}
              placeholder="Cantidad de Varones"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>


          <div className="mb-6">
            <div>
              <label htmlFor="hours" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Horas</label>
            </div>
            <input
              type="number"
              name="hours"
              id="hours"
              defaultValue={usoLaboratorios?.hours || ""}
              onChange={handlerChange}
              placeholder="Horas"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="laboratorio" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Laboratorio</label>
            <select
              id="laboratorio"
              name="laboratorio"
              className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handlerChange}
              defaultValue={usoLaboratorios?.id} // Asegúrate de tener una variable para almacenar el valor seleccionado, por ejemplo, selectedLabId
            >
              <option value="laboratorio">
                Seleccionar Laboratorio
              </option>
              {laboratorios.map((laboratorio: any) => (
                <option key={laboratorio.id} value={laboratorio.id}>
                  {laboratorio.labName}
                </option>
              ))}
            </select>
          </div>


          
        </div>
      </div>
    </>
  );
}
