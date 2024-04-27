import { Link } from "react-router-dom";
import { useState } from "react";

//Importamos Iconos
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { SlLogout } from "react-icons/sl";
import { TbPointFilled } from "react-icons/tb";
import { FaUserGear, FaRegMessage } from "react-icons/fa6";
import { BiSolidUserRectangle } from "react-icons/bi";

const Profile = () => {

  const [opcionPerfil, setOptionPerfil] = useState(false);

  const handlePerfil = () => {
    setOptionPerfil(!opcionPerfil);
  }

  const handleClickOutside = () => {
    setOptionPerfil(false);
  }
  return (
    <>
      <div className="flex items-center lg:w[70%] justify-end gap-3">
         {/** Icono de Notificaciones */}
        <ul className="flex items-center gap-2 mr-4">         
          <li className="relative text-4xl">
            <Link>
              {" "}
              <IoIosNotificationsOutline />
            </Link>
            <span className="absolute -top-2 left-3 text-red-600 icono">
              <TbPointFilled />
            </span>
          </li>
        </ul>
        {/** Sección Perfil -- Aca Coloque una posicion Absoluta para Moviles hacia la derecha  */}
        <div className="absolute right-1 md:relative" onClick={handlePerfil}>
          <Link className="flex items-center gap-4">
            <span className="hidden text-right lg:block">
              <h4 className="block text-sm font-medium text-zinc-600">
                Esteban Leonardo
              </h4>
              <span className="block text-xs text-zinc-600">Designed UX</span>
            </span>
            <span className="h-auto w-16 rounded-full">
              <img className="w-18 h-auto" src="/Avatar-User.png" alt="" />
            </span>
            <span className="text-2xl text-zinc-500">
              {opcionPerfil ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </span>
          </Link>
          {/** Menu Desplegable Perfil */}
          {opcionPerfil && (
            <div
              className="absolute right-0 mt-4 flex flex-col shadow-md bg-white z-30"
              onClick={handleClickOutside}
            >
              <ul className="flex flex-col gap-5 border-b ">
                <li>
                  <Link className="flex items-center gap-3.5 p-4 text-md  duration-300 ease-in-out hover:bg-gray-200">
                    <BiSolidUserRectangle />
                    Perfil
                  </Link>
                  <Link className="flex items-center gap-3.5 p-4 text-md  duration-300 ease-in-out hover:bg-gray-200">
                    <FaRegMessage />
                    Mis Mensajes
                  </Link>
                  <Link className="flex items-center gap-3.5 p-4 text-md  duration-300 ease-in-out hover:bg-gray-200">
                    <FaUserGear />
                    Configuración
                  </Link>
                </li>
              </ul>
              <button className="flex items-center gap-3.5 px-6 py-4 duration-300 ease-in-out hover:bg-gray-200 hover:font-bold">
                <SlLogout />
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
