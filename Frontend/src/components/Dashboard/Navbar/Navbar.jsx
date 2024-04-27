/**
 * Autor: @elsoprimeDEV
 * */

import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  MdDashboard,
  MdCardTravel,
  MdInventory,
  MdOutlineInventory,
} from "react-icons/md";

import { FaLayerGroup } from "react-icons/fa6";
import { BsPersonPlusFill } from "react-icons/bs";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState({
    recursosHumanos: false,
    inventario: false,
  });

  const toggleMenu = (menu) => {
    setMenuVisible((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const isActiveRoute = (route) => {
    return activeRoute === route;
  };

  return (
    <div className="roboto-condensed text-xl">
      <nav>
        <ul>
          <li className="m-6 text-sm">
            <NavLink
              className={`flex items-center gap-2 p-2.5 rounded-lg hover:bg-white hover:text-gray-700 hover:font-bold transition-colors ${
                isActiveRoute("/home") && "bg-white shadow-md"
              }`}
              to="/home"
            >
              <span className="bg-orange-500 text-white p-2 rounded-sm">
                <MdDashboard />
              </span>
              Dashboard
            </NavLink>
          </li>
          <li className="m-6 text-sm">
            <NavLink
              className={`flex items-center gap-2 p-2.5 rounded-lg hover:bg-white hover:text-gray-700 hover:font-bold transition-colors ${
                isActiveRoute("/home/gestion-personas") && "bg-white shadow-md"
              }`}
              onClick={() => toggleMenu("recursosHumanos")}
            >
              <span className="bg-orange-500 text-white p-2 rounded-sm">
                <FaLayerGroup />
              </span>
              Recursos Humanos
              <span className="text-md">
                {menuVisible.recursosHumanos ? (
                  <RiArrowDropUpLine />
                ) : (
                  <RiArrowDropDownLine />
                )}
              </span>
            </NavLink>
            {/** SubMenu Navbar 1 */}
            {menuVisible.recursosHumanos && (
              <ul>
                <li className="m-1.5">
                  <NavLink
                    className={`flex items-center gap-2 p-2.5 rounded-lg hover:bg-gray-200 hover:text-gray-600 transition-colors ${
                      isActiveRoute("/home/gestion-personas") && "bg-gray-200"
                    }`}
                    to="gestion-personas"
                  >                    
                    <span className="bg-orange-500 p-2 rounded-sm shadow-md">
                      <BsPersonPlusFill />
                    </span>
                    Gestión Personas
                  </NavLink>
                </li>
                <li className="m-1.5">
                <NavLink
                    className={`flex items-center gap-2 p-2.5 rounded-lg hover:bg-gray-200 hover:text-gray-600 transition-colors ${
                      isActiveRoute("/home/registrar-persona") && "bg-gray-200"
                    }`}
                    to="registrar-persona"
                  >  
                    <span className="bg-orange-500 p-2 rounded-sm shadow-md">
                      <MdCardTravel />
                    </span>
                    Gestión Vacaciones
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="m-6 text-sm">
          <NavLink
              className={`flex items-center gap-2 p-2.5 rounded-lg hover:bg-white hover:text-gray-700 hover:font-bold transition-colors ${
                isActiveRoute("/home/gestion-almacen") && "bg-white shadow-md"
              }`}
              onClick={() => toggleMenu("inventario")}
            >
              <span className="bg-orange-500 text-white p-2 rounded-sm shadow-md">
                <MdInventory />
              </span>
              Inventario
              <span className="text-sm">
                {menuVisible.inventario ? (
                  <RiArrowDropUpLine />
                ) : (
                  <RiArrowDropDownLine />
                )}
              </span>
            </NavLink>
            {/** SubMenu Navbar 2 */}
            {menuVisible.inventario && (
              <ul>
                <li className="m-1.5">
                <NavLink
                    className={`flex items-center gap-2 p-2.5 rounded-lg hover:bg-gray-200 hover:text-gray-600 transition-colors ${
                      isActiveRoute("/home/gestion-almacen") && "bg-gray-200"
                    }`}
                    to="gestion-almacen"
                  >  
                    <span className="bg-orange-500 p-2 rounded-sm shadow-md">
                      <MdOutlineInventory />
                    </span>
                    Gestión Almacen
                  </NavLink>
                </li>
                <li className="m-1.5">
                  <NavLink className="flex items-center gap-2 p-2.5 text-gray-600 rounded-lg hover:bg-gray-200">
                    <span className="bg-orange-500 p-2 rounded-sm shadow-md">
                      <MdCardTravel />
                    </span>
                    Salida
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
