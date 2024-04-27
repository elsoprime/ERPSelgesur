// Autor: @elsoprimeDEV
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {clienteAxios} from "../../../config/axios";
import Alerta from "../../Alertas/Alertas";
import AsideForm from "./AsideForm";

import useAuth from "../../../hooks/useAuth";

// Lógica Frontend de Login
const AccesoLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const navigate = useNavigate();

  const { setAuth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlerta({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }

    try {
      const { data } = await clienteAxios.post("/usuarios/login", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      setAuth(data);
      navigate("/home");
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

  const { msg } = alerta;

  return (
    // Creamos la maquetación del Formulario realizado con TailwindCSS
    <>
      <div className="flex justify-center min-h-screen">
        {/** Importamos el Componente del AsideForm */}
        <AsideForm />

        {/** Cuerpo del Formulario de Login */}
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">          
            <div className="flex md:flex justify-center md:mr-4">
              <img src="/LogoSelgesur.png" alt="Logo" className="w-96 h-auto" />
            </div>
            <div className="flex md:flex justify-center md:mr-4">
              <h3 className="bebas-neue-regular mt-3 text-sky-500 text-3xl font-bold text-center">
                Acceso a Plataforma
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
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm text-gray-600 font-bold"
                    >
                      Password
                    </label>
                    <Link
                      to="/olvide-password"
                      className="text-sm text-gray-700 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Olvidaste tu Password?
                    </Link>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Escribe tu Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow-md">
                    Iniciar Sesión
                  </button>
                </div>
                <div className="absolute bottom-0 md:bottom-2 md:left-2">{msg && <Alerta alerta={alerta} />} </div> 
              </form>

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

export { AccesoLogin };
