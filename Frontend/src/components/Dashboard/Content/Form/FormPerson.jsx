/**
 *
 * @elsoprimeDEV
 */
import { useState, useEffect } from "react";
import SelectLocations from "../Form/Select";

import Alertas from "../../../Alertas/Alertas"


// Componente Principal "Formulario de Registro de Personas"
const FormularioPersonas = () => {

  //Estado para gestionar la pestaña actual
  const [pestañaActual, setPestañaActual] = useState("Perfil");

  // Estado para almacenar datos del perfil
  const [datosPerfil, setDatosPerfil] = useState({
    rut: "",
    nombres: "",
    paterno: "",
    materno: "",
    fechaNacimiento: "", // Nuevo campo para la fecha de nacimiento
    sexo: "", // Nuevo campo para el sexo
    licenciaConducir: "", // Nuevo campo para la licencia de conducir
    nivelEstudios: "", // Nuevo campo para el nivel de estudios
    estadoCivil: "", // Nuevo campo para el estado civil
    correoElectronico: "",
  });

  // Estado para almacenar datos de dirección
  const [datosDireccion, setDatosDireccion] = useState({
    direccion: "",
    telefono: "",
    comuna: "",
    provincia: "",
    region: "",
  });


  // Función para manejar cambios en los datos del perfil
  const manejarCambioPerfil = (campo, valor) => {
    setDatosPerfil((prevDatos) => ({
      ...prevDatos,
      [campo]: valor,
    }));
  };

  // Función para manejar cambios en los datos de dirección
  const manejarCambioDireccion = (campo, valor) => {
    setDatosDireccion((prevDatos) => ({
      ...prevDatos,
      [campo]: valor,
    }));
  };

  // Función para cambiar la pestaña actual
  const cambiarPestaña = (nuevaPestaña) => {
    setPestañaActual(nuevaPestaña);
  };

  // Renderiza el componente de acuerdo a la pestaña actual
  const renderizarComponente = () => {
    switch (pestañaActual) {
      case "Perfil":
        return <Perfil datos={datosPerfil} onChange={manejarCambioPerfil} />;
      case "Direcciones":
        return (
          <Direcciones datos={datosDireccion} onChange={manejarCambioDireccion} />
        );
      case "Antecedentes":
        return <Antecedentes />;

      case "Otros":
        return <Otros />;

      // Agregamos más casos para otras pestañas según sea necesario
      default:
        return null;
    }
  };

  // Si datosPerfil cambia, imprime los nuevos datos
  useEffect(() => {
    console.log("Datos del Perfil:", datosPerfil, datosDireccion);
  }, [datosPerfil, datosDireccion]);



  return (
    <>
      {/** Seccion de Tabulacion */}
      <NavegacionFormulario
        pestañaActual={pestañaActual}
        cambiarPestaña={cambiarPestaña}
      />
      <form>
        {/** Contenedor de los Formularios */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 md:justify-between lg:justify-between item-center">
          {/** Sección Perfil Formulario */}


          <div className="grid col-span-2 md:col-span-2 lg:col-span-2 mb-4 lg:mb-0 text-xs p-6 bg-white shadow-md rounded-md">
            {/** Componentes Dinamicos */}
            {renderizarComponente()}
          </div>
          {/** Sección Imagen Personalizada "Perfil" */}
          <InformacionPerfil />
          {/** Boton del Formulario */}
          <div>
            <button
              className="mt-6 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform
         bg-green-500 rounded-md hover:bg-green-800 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow-md"
            >
              Guardar Nueva Persona
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

// Componente "Navegacion del Formulario de Registro de Personas"
const NavegacionFormulario = ({ pestañaActual, cambiarPestaña }) => {
  const pestañas = ["Perfil", "Direcciones", "Antecedentes", "Otros"];

  return (
    <>
      <div className="mb-4">
        <nav>
          <ul className="md:flex gap-1 lg:justify-left border-b border-gray-100 text-sm">
            {pestañas.map((pestaña, index) => (
              <li
                key={index}
                className={`p-2.5 border cursor-pointer hover:bg-gray-200 transition-colors ${pestañaActual === pestaña ? "bg-zinc-200 font-bold" : ""
                  }`}
                onClick={() => cambiarPestaña(pestaña)}
              >
                {pestaña}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

// Componente de Perfil "Imagen de Persona e Información"
const InformacionPerfil = () => {
  return (
    <>
      <div className="flex flex-col md:flex-col col-span-2 lg:col-span-1 items-center p-2 bg-white shadow-md lg:ml-8 rounded-md">
        {/** imagen de Perfil de la Persona */}
        <img
          src="/Avatar.png"
          alt=""
          className="w-32 h-auto md:w-72 md:h-auto rounded-full"
        />
        {/** Información de la Persona */}
        <div className="w-[80%] text-center">
          <h5 className="font-bold">Nombre Completo</h5>
          <p className="text-xs text-light text-gray-600 p-1">Edad</p>
          <p className="text-xs text-light text-gray-600 p-1">Cargo</p>
          <p className="text-xs text-light text-gray-600 p-1">Lugar Asignado</p>
          <p className="text-xs text-light text-gray-600 p-1">
            Tiempo Contratado
          </p>
          <button
            className="mt-6 mb-6 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform
         bg-sky-500 rounded-md hover:bg-sky-800 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow-md"
          >
            Examinar
          </button>
        </div>
      </div>
    </>
  );
};

// Componente Formulario Sección Perfil
const Perfil = ({ datos, onChange }) => {
  // Estado local para los datos del perfil
  const [datosPerfilLocal, setDatosPerfilLocal] = useState({
    rut: "",
    nombres: "",
    paterno: "",
    materno: "",
    fechaNacimiento: "", // Nuevo campo para la fecha de nacimiento
    sexo: "", // Nuevo campo para el sexo
    licenciaConducir: "", // Nuevo campo para la licencia de conducir
    nivelEstudios: "", // Nuevo campo para el nivel de estudios
    estadoCivil: "", // Nuevo campo para el estado civil
    correoElectronico: "",
    // Agrega más campos según sea necesario
  });

  // Función para manejar cambios en los datos del perfil
  const manejarCambio = (campo, valor) => {
    setDatosPerfilLocal((prevDatos) => ({
      ...prevDatos,
      [campo]: valor,
    }));

    // Informa al componente padre (FormularioPersonas) sobre el cambio
    onChange(campo, valor);
  };

  // Si datos ya tiene algún valor, utiliza esos valores por defecto
  useEffect(() => {
    if (datos) {
      setDatosPerfilLocal((prevDatos) => ({
        ...prevDatos,
        ...datos,
      }));
    }
  }, [datos]);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2.5">
        {/** Componentes de Formulario "label y input" */}
        <div className="mt-4 p-1">
          <label htmlFor=""> Rut:</label>
          <input
            type="text"
            name=""
            id=""
            value={datosPerfilLocal.rut}
            onChange={(e) => manejarCambio("rut", e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4 p-1">
          <label htmlFor=""> Nombres:</label>
          <input
            type="text"
            name="nombres"
            id=""
            value={datosPerfilLocal.nombres}
            onChange={(e) => manejarCambio("nombres", e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4 p-1">
          <label htmlFor=""> Apellido Paterno:</label>
          <input
            type="text"
            name="paterno"
            id=""
            value={datosPerfilLocal.paterno}
            onChange={(e) => manejarCambio("paterno", e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4 p-1">
          <label htmlFor=""> Apellido Materno:</label>
          <input
            type="text"
            name="materno"
            id=""
            value={datosPerfilLocal.materno}
            onChange={(e) => manejarCambio("materno", e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4 p-1">
          <label htmlFor=""> Fecha Nacimiento:</label>
          <input
            type="date"
            name="fechanacimiento"
            id=""
            value={datosPerfilLocal.fechaNacimiento}
            onChange={(e) => manejarCambio("fechaNacimiento", e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4 p-1">
          <label htmlFor="">Sexo:</label>
          <select
            name="sexo"
            id=""
            value={datosPerfilLocal.sexo}
            onChange={(e) => manejarCambio(e.target.name, e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          >
            <option value="0">Selecciona un Opción</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>

        <div className="mt-4 p-1">
          <label htmlFor="">Licencia de Conducir:</label>
          <select
            name="licenciaConducir"
            id=""
            value={datosPerfilLocal.licenciaConducir}
            onChange={(e) => manejarCambio(e.target.name, e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          >
            <option value="0">Selecciona una Opción</option>
            <option value="Profesional">Profesional</option>
            <option value="NoProfesional">No Profesional B</option>
            <option value="SinLicencia">Sin Licencia</option>
          </select>
        </div>

        <div className="mt-4 p-1">
          <label htmlFor="">Nivel de Estudios:</label>
          <select
            name="nivelEstudios"
            id=""
            value={datosPerfilLocal.nivelEstudios}
            onChange={(e) => manejarCambio(e.target.name, e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          >
            <option value="0">Selecciona una Opción</option>
            <option value="basica-completa">Enseñanza Básica Completa</option>
            <option value="basica-incompleta">
              Enseñanza Básica Incompleta
            </option>
            <option value="media-completa">Enseñanza Media Completa</option>
            <option value="media-incompleta">Enseñanza Media Completa</option>
            <option value="superior-completa">Enseñanza Superior</option>
          </select>
        </div>

        <div className="mt-4 p-1">
          <label htmlFor="">Estado Civil:</label>
          <select
            name="estadoCivil"
            id=""
            value={datosPerfilLocal.nivelEstudios}
            onChange={(e) => manejarCambio(e.target.name, e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          >
            <option value="0">Selecciona una Opción</option>
            <option value="basica-completa">Soltero(a)</option>
            <option value="basica-incompleta">Casado(a)</option>
            <option value="media-completa">Divorciado(a)</option>
            <option value="basica-incompleta">Viudo(a)</option>
          </select>
        </div>

        <div className="mt-4 p-1">
          <label htmlFor=""> Correo Electronico:</label>
          <input
            type="email"
            name="correoElectronico"
            id=""
            value={datosPerfilLocal.correoElectronico}
            onChange={(e) => manejarCambio("correoElectronico", e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </div>
    </>
  );
};

// Componente Formulario Sección Direccion
const Direcciones = ({ datos, onChange }) => {

  // Estado Local para los datos del Direccion
  const [datosDireccionPerfil, setDatosDireccionPerfil] = useState({
    direccion: "",
    telefono: "",
    email: "",
    comuna: datos.comuna,
    provincia: datos.provincia,
    region: datos.region,
    asignacion: ""
  });

  // Función para manejar cambios en los datos del perfil
  const manejarCambio = (campo, valor) => {
    setDatosDireccionPerfil((prevDatos) => ({
      ...prevDatos,
      [campo]: valor,
    }));

    // Informa al componente padre (FormularioPersonas) sobre el cambio
    onChange(campo, valor);
  };

  // Si datos ya tiene algún valor, utiliza esos valores por defecto
  useEffect(() => {
    if (datos) {
      setDatosDireccionPerfil((prevDatos) => ({
        ...prevDatos,
        ...datos,
      }));
    }
  }, [datos]);


  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2.5">
        {/** Componentes de Formulario "label y input" */}

        <SelectLocations />

        <div className="mt-4 p-1">
          <label htmlFor=""> Asignacion de Trabajo:</label>
          <select id="contrato" className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
            <option value="">Selecciona una opción</option>
          </select>
        </div>

        <div className="mt-4 p-1">
          <label htmlFor=""> Dirección Particular:</label>
          <input
            type="text"
            name=""
            id=""
            value={datosDireccionPerfil.direccion}
            onChange={(e) => manejarCambio("direccion", e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4 p-1">
          <label htmlFor=""> Telefono de Contacto:</label>
          <input
            type="text"
            name=""
            id=""
            value={datosDireccionPerfil.telefono}
            onChange={(e) => manejarCambio("telefono", e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

      </div>
    </>
  );
};

// Componente Formulario Sección Antecendentes Persona
const Antecedentes = ({ datos, onChange }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2.5">
        {/** Componentes de Formulario "label y input" */}
        <div className="mt-4 p-1">
          <label htmlFor="contrato">Tipo Contrato:</label>
          <select id="contrato" className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
            <option value="">Selecciona una opción</option>
          </select>
        </div>

        <div className="mt-4 p-1">
          <label htmlFor="departamento">Departamento:</label>
          <select id="departamento" className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
            <option value="">Selecciona una opción</option>
          </select>
        </div>

        <div className="mt-4 p-1">
          <label htmlFor="cargo">Cargo:</label>
          <select id="cargo" className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
            <option value="">Selecciona una opción</option>
          </select>
        </div>

        <div className="mt-4 p-1">
          <label htmlFor="fechaContrato"> Fecha Contrato:</label>
          <input
            type="date"
            name="fechaContrato"
            id="fechaContrato"
            className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>


        <div className="mt-4 p-1">
          <label htmlFor="fechaContrato"> Lugar de Trabajo (Asignado):</label>
          <select id="cargo" className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
            <option value="">Selecciona una opción</option>
          </select>
        </div>

        <div className="mt-4 p-1">
          <label htmlFor="status">Status:</label>
          <select id="status" className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
            <option value="">Selecciona una opción</option>
          </select>
        </div>

      </div>
    </>
  );
};

// Componente Formulario Sección Antecendentes Persona
const Otros = ({ datos, onChange }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2.5">
        {/** Componentes de Formulario "label y input" */}
        <div className="mt-4 p-1">
          <label htmlFor="contrato">Fondo de Pensión:</label>
          <select id="contrato" className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
            <option value="">Selecciona una opción</option>
          </select>
        </div>

        <div className="mt-4 p-1">
          <label htmlFor="departamento">Isapre:</label>
          <select id="departamento" className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
            <option value="">Selecciona una opción</option>
          </select>
        </div>

        <div className="mt-4 p-1">
          <label htmlFor="cargo">Banco:</label>
          <select id="cargo" className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
            <option value="">Selecciona una opción</option>
          </select>
        </div>

        <div className="mt-4 p-1">
          <label htmlFor="tipoCuenta">Tipo Cuenta:</label>
          <select id="tipoCuenta" className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
            <option value="">Selecciona una opción</option>
          </select>
        </div>

        <div className="mt-4 p-1">
          <label htmlFor="NumeroCuenta">N° Cuenta:</label>
          <input id="NumeroCuenta" className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />

        </div>

      </div>
    </>
  );
};



export { FormularioPersonas, NavegacionFormulario };
