// Autor: @elsoprimeDEV
import Card from "./Card/Card";

//Contenido de la Ruta Home de la Aplicacion
const HomeContent = () => {
  return (
    <>
      <div className="p-4 lg:p-12">
        {/* Título Encabezado Dashboard */}
        <div>
          <h1 className="bebas-neue-regular text-xl text-zinc-500 mb-2">
            Dashboard / <span className="font-light text-gray-300">Inicio</span>
          </h1>
        </div>
        {/** Importamos componente Card */}
        <Card />
        {/** Otras Importacion que desees */}
        <div className="flex flex-col">
          <div className="flex mt-4 mb-4 p-4 bg-sky-600 shadow-md">
            <h1 className=" font-bold text-3xl text-white">
              Ultimas actividades
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};



//Contenido de la Ruta de Inventario de la Aplicacion
const Inventory = () => {
  return (
    <>
      <div className="p-4 lg:p-12">
        {/* Título Encabezado Dashboard */}
        <div>
          <h1 className="bebas-neue-regular text-2xl text-zinc-500 mb-2">
            Inventario /{" "}
            <span className="font-light text-gray-300">Gestión Almacen</span>
          </h1>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-4 mb-4 p-4 bg-white shadow-md">
            <h1 className=" font-bold text-xl text-white">
              Gestion Almacen- Listado de Registros
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export { HomeContent, Inventory };
