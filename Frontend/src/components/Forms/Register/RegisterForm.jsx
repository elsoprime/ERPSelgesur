import { useState } from "react";
import { Link } from "react-router-dom";
import {clienteAxios} from "../../../config/axios";
import Alerta from "../../Alertas/Alertas";
import AsideRegister from "./AsideRegister";

// Formulario de Registros de Usuarios
const RegistroUsuario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");

  const [alerta, setAlerta] = useState({});

  const limpiarCampos = () => {
    setNombre("");
    setEmail("");
    setPassword("");
    setRepetirPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, email, password, repetirPassword].includes("")) {
      setAlerta({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }

    if (password !== repetirPassword) {
      setAlerta({ msg: "Los Password no son iguales", error: true });
      return;
    }

    if (password.length < 6) {
      setAlerta({
        msg: "Tu Password es muy corto, agregar mínimo 6 caracteres",
        error: true,
      });
      return;
    }

    setAlerta({});

    // Crear el usuario en la API
    try {
      await clienteAxios.post("/usuarios", { nombre, email, password });

      // Hacer algo con la respuesta si es necesario
      setAlerta({
        msg: "Usuario Creado Correctamente, Revisa tu Email",
        error: false,
      });
      limpiarCampos();
    } catch (error) {
      setAlerta({
        msg: error.response?.data?.msg || "Error en la solicitud HTTP",
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div className="flex justify-center min-h-screen">
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="flex md:flex justify-center md:mr-4">
              <img src="/LogoSelgesur.png" alt="Logo" className="w-96 h-auto" />
            </div>
            <div className="flex md:flex justify-center md:mr-4">
              <h3 className="bebas-neue-regular mt-3 text-sky-500 text-3xl font-bold text-center">
                No tienes una Cuenta,{" "}
                <span className="font-bold text-orange-600">Registrate</span>
              </h3>
            </div>
            {/** Cuerpo del Formulario de Login */}
            <div className="mt-8">
              <form onSubmit={handleSubmit} className="roboto-condensed">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 font-bold"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Escribe tu nombre completo"
                    className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>

                <div className="mt-6">
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
                    placeholder="Escribe tu correo electronico"
                    className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm text-gray-600 font-bold"                    
                  >
                    Password
                  </label>
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
                  <label
                    htmlFor="repeatpassword"
                    className="block mb-2 text-sm text-gray-600 font-bold"
                  >
                    Repetir Password
                  </label>
                  <input
                    type="password"
                    name="repeatpassword"
                    id="repeatpassword"
                    placeholder="Repite tu Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={repetirPassword}
                    onChange={(e) => setRepetirPassword(e.target.value)}
                  />
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow-md">
                    Crear Cuenta
                  </button>
                </div>
                <div className="absolute bottom-0 lg:top-2">{msg && <Alerta alerta={alerta} />} </div>  
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
                <Link
                  to="/olvide-password"
                  className="text-sm text-gray-700 focus:text-blue-500 hover:text-blue-500 hover:underline"
                >
                  Olvidaste tu Password?
                </Link>
              </p>
            </div>
          </div>
        </div>
        <AsideRegister />
        {/** Fin del Contenedor */}
      </div>
    </>
  );
};

export default RegistroUsuario;
