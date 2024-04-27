import { RiFolderUserFill } from "react-icons/ri";
import { IoDocuments } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { ImAirplane } from "react-icons/im";
import { MdOutlineInventory } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";

function Card() {
  return (
   <>
   {/* Contenido de la card */}
   <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Card de Personas Activas */}
          <div className="flex flex-col items-center justify-center  text-center p-4 bg-white drop-shadow-lg rounded-lg">
            <span className="p-4 bg-blue-400 text-white rounded-full">
              <RiFolderUserFill className="text-6xl" />
            </span>
            <div className="ml-4 p-2">
            <h2 className="text-4xl text-sky-500 font-black">58</h2>                                   
            </div>
            <div className="ml-4">
            <h2 className="text-2xl text-gray-500 font-medium">Personas Registradas</h2>
            <h5 className="text-gray-500 font-light">Actualmente Contratadas</h5>                                  
            </div>
          </div>

          {/* Card de Personas Con Permisos y/o Vacaciones */}
          <div className="flex flex-col items-center justify-center  text-center p-4 bg-white drop-shadow-lg rounded-lg">
            <span className="p-4 bg-yellow-400 text-white rounded-full">
              <ImAirplane className="text-6xl" />
            </span>
            <div className="ml-4 p-2">
            <h2 className="text-4xl text-yellow-500 font-black">12</h2>                                   
            </div>
            <div className="ml-4">
            <h2 className="text-2xl text-gray-500 font-medium">Total de Personas</h2>
            <h5 className="text-gray-500 font-light">Permisos y/o Vacaciones</h5>                                  
            </div>
          </div>

          {/* Card de Personas Con Permisos y/o Vacaciones */}
          <div className="flex flex-col items-center justify-center  text-center p-4 bg-white drop-shadow-lg rounded-lg">
            <span className="p-4 bg-green-400 text-white rounded-full">
              <MdOutlineInventory className="text-6xl" />
            </span>
            <div className="ml-4 p-2">
            <h2 className="text-4xl text-green-500 font-black">205</h2>                                   
            </div>
            <div className="ml-4">
            <h2 className="text-2xl text-gray-500 font-medium">Total de Ingresos</h2>
            <h5 className="text-gray-500 font-light">Productos en Almacen</h5>                                  
            </div>
          </div>
          
        </div>
   </>
  )
}

export default Card;
