// Autor: @elsoprimeDEV
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {clienteAxios} from "../../../config/axios";
import Alerta from "../../Alertas/Alertas";

import AsideRecovery from "../RecoveryPassword/AsideRecovery";


const RecuperarPassword = () => {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      setAlerta({ msg: "El Email es un campo Obligatorio", error: true });
      return;
    }

    try {
      const { data } = await clienteAxios.post("/usuarios/olvide-password", {
        email,
      });
      setAlerta({ msg: data.msg });
      setEmail("");
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div className="flex justify-center min-h-screen">

        <AsideRecovery/>
     

        {/** Cuerpo del Formulario de Recuperación Password */}
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">          
            <div className="flex md:flex justify-center md:mr-4">
              <img src="/LogoSelgesur.png" alt="Logo" className="w-96 h-auto" />
            </div>
            <div className="flex md:flex justify-center md:mr-4">
              <h3 className="bebas-neue-regular mt-3 text-sky-500 text-3xl font-bold text-center">
                Recupera tu Cuenta de Acceso
              </h3>              
            </div>

            <div className="mt-8">
              <form onSubmit={handleSubmit} className="roboto-condensed">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 font-bold"
                  >
                    Correo Electronico
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Escribe tu correo de usuario"
                    className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow-md">
                    Enviar Instrucciones
                  </button>
                </div>
                <div className="absolute bottom-0 lg:bottom-2 lg:left-3">
                          {alerta.msg && <Alerta alerta={alerta} />}
                        </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-700">
                Ya tienes una cuenta?{" "}
                <Link
                  to="/"
                  className="text-blue-700 focus:outline-none focus:underline hover:underline"
                >
                  Inicia Sesión
                </Link>
              </p>

              <p className="mt-6 text-sm text-center text-gray-700">
                No tienes una cuenta?{" "}
                <Link
                  to="/registrar"
                  className="text-blue-700 focus:outline-none focus:underline hover:underline"
                >
                  Registrate
                </Link>                
              </p>
            </div> 
                  
          </div>          
        </div> 

      </div>
    </>
  );
};

export default RecuperarPassword;
