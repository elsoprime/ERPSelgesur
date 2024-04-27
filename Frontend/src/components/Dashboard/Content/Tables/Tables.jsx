import {Link } from "react-router-dom";
import { BiSolidEdit } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { FaFileDownload } from "react-icons/fa";

//Componente "Tabla de Registros" Gestion Personas
const TablesPerson = () => {
  return (
    <>
    <div className="mt-2 mb-8 flex flex-col gap-12">
      <div className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-md">
        <div className="p-6 px-0 pt-0 pb-2">
          <table className="w-full table-auto">
            {/* Encabezado de la tabla */}
            <thead>
              <tr className="text-md uppercase">
                <th className="py-3 px-5 text-left align-top">
                  <p className="font-normal">Nombre Completo</p>
                </th>
                <th className="py-3 px-5 text-left align-top">
                  <p className="font-normal">Departamento</p>
                </th>
                <th className="py-3 px-5 text-left align-top">
                  <p className="font-normal">Fecha Contrato</p>
                </th>
                <th className="py-3 px-5 text-left align-top">
                  <p className="font-normal">Status</p>
                </th>
                <th className="py-3 px-5 text-left align-top">
                  <p className="font-normal">Registrado Por</p>
                </th>
                <th className="py-3 px-5 text-left align-top">
                  
                </th>
              </tr>
            </thead>
            {/* Cuerpo de la tabla */}
            <tbody>
              <tr className="hover:bg-slate-100 transition-colors hover:shadow-md">
                <td className="py-3 px-5 border-b border-gray-50">
                  <p className="font-semibold">Esteban Leonardo Soto Ojeda</p>
                  <p className="font-light">esteban.soto@selgesur.cl</p>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <p className="font-semibold">Recursos Humanos</p>
                  <p className="font-light">Administrativo</p>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <p className="font-semibold">04 de Diciembre de 2017</p>
                  <p className="font-light">6 Años y 1 Meses</p>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <span className="bg-green-600 p-1 rounded-md text-white">
                    Contratado
                  </span>                  
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <div className="flex items-center gap-4">
                    <img
                      src="/Avatar.png"
                      alt="Autor"
                      className="inline-block relative object-cover object-center w-9 h-auto rounded-sm"
                    />
                    <p className="font-semibold">Esteban Leonardo Soto Ojeda</p>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <div className="flex items-center gap-4">
                    <ul className="flex gap-2 text-xl">
                      <li className="hover:text-sky-500 transition-colors">
                        <Link><FiEye/></Link>
                      </li>
                      <li className="hover:text-yellow-500 transition-colors">
                        <Link><BiSolidEdit /></Link>
                      </li>
                      <li className="hover:text-green-500 transition-colors">
                        <Link><FaFileDownload/></Link>
                      </li>
                    </ul>                  
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-100 transition-colors hover:shadow-md">
                <td className="py-3 px-5 border-b border-gray-50">
                  <p className="font-semibold">Walter Rodrigo Soto Carcamo</p>
                  <p className="font-light">walter.soto@selgesur.cl</p>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <p className="font-semibold">Operaciones y Logistica</p>
                  <p className="font-light">Supervisor</p>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <p className="font-semibold">04 de Enero de 2012</p>
                  <p className="font-light">12 Años y 1 Meses</p>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <span className="bg-green-600 p-1 rounded-md text-white">
                    Contratado
                  </span>                
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <div className="flex items-center gap-4">
                    <img
                      src="/Avatar.png"
                      alt="Autor"
                      className="inline-block relative object-cover object-center w-9 h-auto rounded-sm"
                    />
                    <p className="font-semibold">Esteban Leonardo Soto Ojeda</p>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <div className="flex items-center gap-4">
                    <ul className="flex gap-2 text-xl">
                      <li>
                        <Link><FiEye/></Link>
                      </li>
                      <li>
                        <Link><BiSolidEdit /></Link>
                      </li>
                      <li>
                        <Link><FaFileDownload/></Link>
                      </li>
                    </ul>                  
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-100 transition-colors hover:shadow-md">
                <td className="py-3 px-5 border-b border-gray-50">
                  <p className="font-semibold">Cristian Bryan Santana Frias</p>
                  <p className="font-light">cristian.santana@selgesur.cl</p>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <p className="font-semibold">Operaciones y Logistica</p>
                  <p className="font-light">Supervisor</p>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <p className="font-semibold">09 de Septiembre de 2021</p>
                  <p className="font-light">2 Años y 5 Meses</p>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <span className="bg-green-600 p-1 rounded-md text-white">
                    Contratado
                  </span>                  
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <div className="flex items-center gap-4">
                    <img
                      src="/Avatar.png"
                      alt="Autor"
                      className="inline-block relative object-cover object-center w-9 h-auto rounded-sm"
                    />
                    <p className="font-semibold">Esteban Leonardo Soto Ojeda</p>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <div className="flex items-center gap-4">
                    <ul className="flex gap-2 text-xl">
                      <li>
                        <Link><FiEye/></Link>
                      </li>
                      <li>
                        <Link><BiSolidEdit /></Link>
                      </li>
                      <li>
                        <Link><FaFileDownload/></Link>
                      </li>
                    </ul>                  
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-100 transition-colors hover:shadow-md">
                <td className="py-3 px-5 border-b border-gray-50">
                  <p className="font-semibold">Rodrigo Javier Edmundo Hernandez Mascareña</p>
                  <p className="font-light">rodrigo.hernandez@selgesur.cl</p>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <p className="font-semibold">Prevención de Riesgos</p>
                  <p className="font-light">Prevencionista de Riesgos</p>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <p className="font-semibold">09 de Enero de 2021</p>
                  <p className="font-light">3 Años y 1 Meses</p>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <span className="bg-green-600 p-1 rounded-md text-white">
                    Contratado
                  </span>                  
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <div className="flex items-center gap-4">
                    <img
                      src="/Avatar.png"
                      alt="Autor"
                      className="inline-block relative object-cover object-center w-9 h-auto rounded-sm"
                    />
                    <p className="font-semibold">Esteban Leonardo Soto Ojeda</p>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-100 transition-colors hover:shadow-md">
                <td className="py-3 px-5 border-b border-gray-50">
                  <p className="font-semibold">Jason John Muñoz Gallardo</p>
                  <p className="font-light">jason.munoz@selgesur.cl</p>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <p className="font-semibold">Recursos Humanos</p>
                  <p className="font-light">Asesor de gastos y procesos</p>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <p className="font-semibold">02 de Noviembre de 2023</p>
                  <p className="font-light">0 Años y 2 Meses</p>
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <span className="bg-green-600 p-1 rounded-md text-white">
                    Contratado
                  </span>                
                </td>
                <td className="py-3 px-5 border-b border-gray-50">
                  <div className="flex items-center gap-4">
                    <img
                      src="/Avatar.png"
                      alt="Autor"
                      className="inline-block relative object-cover object-center w-9 h-auto rounded-sm"
                    />
                    <p className="font-semibold">Esteban Leonardo Soto Ojeda</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>        
      </div>      
    </div>
    {/** Seccion para el boton */}
    <div className="flex flex-row">
    <button className="bg-green-600 py-2 px-12 text-white rounded-md hover:bg-green-800 hover:shadow-md transition-colors">Agregar Nuevo</button>
    </div>
    </>
  );
};

export {TablesPerson};
