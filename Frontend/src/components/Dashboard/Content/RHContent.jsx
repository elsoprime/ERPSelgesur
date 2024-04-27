/**
 * Autor: @elsoprimeDEV
/**
 * 
 * Este componente corresponde al modulo de recursos humanos
 */
import { TablesPerson } from "../Content/Tables/Tables";
import { FormularioPersonas } from "./Form/FormPerson";

//Contenido de la Ruta de Recursos Humanos de la Aplicacion
const ResourcesHomeContent = () => {
    return (
      <>
        <div className="p-4 lg:p-12">
          {/* Título Encabezado Dashboard */}
          <div>
            <h1 className="bebas-neue-regular text-xl text-zinc-500 mb-2">
              Recursos Humanos /{" "}
              <span className="font-light text-gray-300">Gestión Personas</span>
            </h1>
          </div>
          <div className="flex flex-col">
            <div className="flex mt-4 mb-4 p-4 bg-gray-600 shadow-md">
              <h1 className=" font-bold text-md text-white">
                Listado de Personas
              </h1>
            </div>
            <TablesPerson />
          </div>
        </div>
      </>
    );
  };
  
  //Contenido de la Ruta de Recursos Humanos de la Aplicacion
  const PersonasFormContent = () => {
    return (
      <>
        <div className="p-4 lg:p-12">
          {/* Título Encabezado Dashboard */}
          <div>
            <h1 className="bebas-neue-regular text-xl text-zinc-500 mb-2">
              Recursos Humanos /{" "}
              <span className="font-light text-gray-300">Gestión Personas</span>
            </h1>
          </div>

          {/** Encabezado Formulario de Registros "Personas" */}          
            <div className="mt-4 mb-4 p-4 bg-gray-600 shadow-md">
              <h1 className=" font-bold text-sm text-white">
               Formulario de Registro             
              </h1>             
            </div>

            {/** Importamos Componente Formulario desde Directorio Form */}
            <FormularioPersonas/>         
        </div>
      </>
    );
  };

  export {ResourcesHomeContent, PersonasFormContent};