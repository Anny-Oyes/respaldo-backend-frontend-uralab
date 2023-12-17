import { getAllAsignaturas, getAllLaboratorio, getAllDocentes, getAllModalidades, getAllCarreras, getAllTurnos } from "@/app/(setup)/laboratory-use/actions/post/save-labUse";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { UsoLab } from "@/app/interfaces/usoLab-interfaces";
import { Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface FieldsUsoLabProps {
  usoLaboratorio?: UsoLab;
  onChangeUsoLab: (data: setterData) => void;
}

export default function FieldsUsoLab(
  { usoLaboratorio, onChangeUsoLab }: FieldsUsoLabProps = {
    usoLaboratorio: {} as UsoLab,
    onChangeUsoLab: () => { }
  }
) {
  const [fields, setFields] = useState<UsoLab>({} as UsoLab);
  const handleChangeUsoLab = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    onChangeUsoLab({ clave, valor });
  };

  useEffect(() => {
    if (usoLaboratorio) {
      setFields(usoLaboratorio || ({} as UsoLab));
    }
  }, [usoLaboratorio]);

  const [carreras, setCarreras] = useState([]);
  const [asignaturas, setAsignaturas] = useState([]);
  const [docentes, setDocentes] = useState([]);
  const [modalidades, setModalidades] = useState([]);
  const [turnos, setTurnos] = useState([]);
  const [laboratorios, setLaboratorios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carrerasData = await getAllCarreras();
        const asignaturaData = await getAllAsignaturas();
        const docentesData = await getAllDocentes();
        const modalidadesData = await getAllModalidades();
        const turnosData = await getAllTurnos();
        const laboratoriosData = await getAllLaboratorio();
        setAsignaturas(asignaturaData);
        setCarreras(carrerasData);
        setDocentes(docentesData);
        setTurnos(turnosData);
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

    //   setUsoLaboratorios({
    // ...usoLaboratorio,
    // [...data];

  }
  return (
    <div>
      <div className="mb-6">
        <div>
          <label htmlFor="className" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Nombre de la Clase</label>
        </div>
        <select
          id="className"
          name="className"
          value={fields?.className?.id }
          onChange={(e) => {
            console.log(e.target.value);
            const data: setterData = {
              clave: e.target.name,
              valor: e.target.value,
            };
            handleChangeUsoLab(data);
          }}
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-900"
        >
          <option value="className" >
            Seleccionar Asignatura
          </option>
          {asignaturas.map((asignatura: any) => (
            <option key={asignatura.id} value={asignatura.id}   >
              {asignatura.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <div>
          <label htmlFor="carrera" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Carrera</label>
        </div>
        <select
          id="carrera"
          name="carrera"
          value={fields?.carrera?.id }
          onChange={(e) => {
            const data: setterData = {
              clave: e.target.name,
              valor: e.target.value,
            };
            handleChangeUsoLab(data);
          }}
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
          <label htmlFor="teacher" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Docente</label>
        </div>
        <select
          name="docente"
          id="docente"
          value={fields?.docente?.id }
          onChange={(e) => {
            const data: setterData = {
              clave: e.target.name,
              valor: e.target.value,
            };
            handleChangeUsoLab(data);
          }}
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
          <label htmlFor="date" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Fecha</label>
        </div>
        <input
          type="date"
          name="date"
          id="date"
          defaultValue={fields?.date || ""}
          onChange={(e) => {
            const data: setterData = {
              clave: e.target.name,
              valor: e.target.value,
            };
            handleChangeUsoLab(data);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <div>
          <label htmlFor="modality" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Modalidad</label>
        </div>
        <select
          id="modality"
          name="modality"
          value={fields?.modality?.id }
          onChange={(e) => {
            const data: setterData = {
              clave: e.target.name,
              valor: e.target.value,
            };
            handleChangeUsoLab(data);
          }}
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
        <div>
          <label htmlFor="shift" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">
            Turno
          </label>
        </div>
        <select
          id="shift"
          name="shift"
          value={fields?.shift?.id }
          onChange={(e) => {
            const data: setterData = {
              clave: e.target.name,
              valor: e.target.value,
            };
            handleChangeUsoLab(data);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="shift" >
            Seleccionar Turno
          </option>
          {turnos.map((turno: any) => (
            <option key={turno.id} value={turno.id}>
              {turno.name}
            </option>
          ))}
        </select>
      </div>


      <div className="mb-6">
        <div>
          <label htmlFor="year" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Año de la carrera</label>
        </div>
        <input
          type="number"
          name="year"
          id="year"
          defaultValue={fields?.year || ""}
          onChange={(e) => {
            const data: setterData = {
              clave: e.target.name,
              valor: e.target.value,
            };
            handleChangeUsoLab(data);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Año"
          min="1"
          max="5"
        />
      </div>

      <div className="mb-6">
        <div>
          <label htmlFor="semester" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Semestre</label>
        </div>
        <select
          id="semester"
          name="semester"
          value={fields?.semester || "" }
          onChange={(e) => {
            const data: setterData = {
              clave: e.target.name,
              valor: e.target.value,
            };
            handleChangeUsoLab(data);
          }}
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
          <label htmlFor="female" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Mujeres</label>
        </div>
        <input
          type="number"
          name="female"
          id="female"
          placeholder="Escriba un cantidad mujeres..."
          defaultValue={fields?.female}
          onChange={(e) => {
            const data: setterData = {
              clave: e.target.name,
              valor: e.target.value,
            };
            handleChangeUsoLab(data);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <div>
          <label htmlFor="male" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Varones</label>
        </div>
        <input
          type="number"
          name="male"
          id="male"
          defaultValue={fields?.male || ""}
          onChange={(e) => {
            const data: setterData = {
              clave: e.target.name,
              valor: e.target.value,
            };
            handleChangeUsoLab(data);
          }}
          placeholder="Cantidad de Varones"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>


      <div className="mb-6">
        <div>
          <label htmlFor="hours" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Horas</label>
        </div>
        <input
          type="number"
          name="hours"
          id="hours"
          defaultValue={fields?.hours || ""}
          onChange={(e) => {
            const data: setterData = {
              clave: e.target.name,
              valor: e.target.value,
            };
            handleChangeUsoLab(data);
          }}
          placeholder="Horas"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="laboratorio" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Laboratorio</label>
        <select
          id="laboratorio"
          name="laboratorio"
          value={fields?.laboratorio?.id }
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            const data: setterData = {
              clave: e.target.name,
              valor: e.target.value,
            };
            handleChangeUsoLab(data);
          }}
          defaultValue={fields?.id} // Asegúrate de tener una variable para almacenar el valor seleccionado, por ejemplo, selectedLabId
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
      <div className="w-full flex flex-col gap-4">
      </div>
      <div className="w-full flex flex-col gap-4 mt-2">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Switch
            name="is_active"
            defaultSelected={usoLaboratorio?.is_active}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.checked,
              };

              handleChangeUsoLab(data);
            }}
          />
        </div>
      </div>
    </div>
  );
}
