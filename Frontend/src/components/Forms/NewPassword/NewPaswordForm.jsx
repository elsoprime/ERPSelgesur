//  Autor: @elsprimeDev
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {clienteAxios} from "../../../config/axios";
import CustomAlert from "../../Alertas/Alertas";
import useAuth from "../../../hooks/useAuth";
import AsideNewPassword from "../NewPassword/AsideNewPassword";

// Formulario de Cambio de Password "Contraseña"
const CambiarPassword = () => {
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const [tokenValido, setTokenValido] = useState(false);
  const [passwordModificado, setPasswordModificado] = useState(false);

  const params = useParams();
  const { token } = params;

  const limpiarCampos = () => {
    setPassword("");
    setRepetirPassword("");
  };

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/usuarios/olvide-password/${token}`);
        setAlerta({ msg: "Coloca tu nueva contraseña" });
        setTokenValido(true);
      } catch (error) {
        setAlerta({ msg: "Hubo un Error con en enlace", error: true });
      }
    };
    comprobarToken();
  }, [token]);

  // Cambiamos el Password de Usuario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repetirPassword) {
      setAlerta({ msg: "Los Password no son iguales", error: true });
      return;
    }

    if (password.length < 6) {
      setAlerta({
        msg: "La contraseña debe contener un minimo de 6 caracteres",
        error: true,
      });
      return;
    }

    try {
      const url = `/usuarios/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });
      setAlerta({ msg: data.msg });
      setPasswordModificado(true);
      limpiarCampos();
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div className="flex justify-center min-h-screen">
        <AsideNewPassword />

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="flex md:flex justify-center md:mr-4">
              <img src="/LogoSelgesur.png" alt="Logo" className="w-96 h-auto" />
            </div>

            {tokenValido ? (
              <>
                {passwordModificado ? (
                  <>
                    <div className="flex md:flex justify-center md:mr-4">
                      <h3 className="bebas-neue-regular mt-3 text-green-500 text-3xl font-bold text-center">
                        Password Actualizado Correctamente
                      </h3>
                    </div>

                    <div className="flex justify-center mt-8">
                      <nav>
                        <Link
                          className="roboto-condensed text-center underline my-5 text-gray-900 hover:text-orange-600 hover:font-bold"
                          to="/"
                        >
                          Acceder a Plataforma
                        </Link>
                      </nav>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex md:flex justify-center md:mr-4">
                      <h3 className="bebas-neue-regular mt-3 text-orange-500 text-3xl font-bold text-center">
                        Establece tu nuevo Password
                      </h3>
                    </div>
                    
                    <div className="mt-8">
                      <form
                        onSubmit={handleSubmit}
                        className="roboto-condensed"
                      >
                        <div className="mt-6">
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm text-gray-600 font-bold"
                          >
                            Nuevo Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Escribe tu Nuevo Password"
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
                            Repetir Nuevo Password
                          </label>
                          <input
                            type="password"
                            name="repeatpassword"
                            id="repeatpassword"
                            placeholder="Repite tu Nuevo Password"
                            className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={repetirPassword}
                            onChange={(e) => setRepetirPassword(e.target.value)}
                          />
                        </div>

                        <div className="mt-6">
                          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow-md">
                            Cambiar Contraseña
                          </button>
                        </div>

                        <div className="absolute bottom-0 lg:bottom-2 lg:left-3">
                          {alerta.msg && <CustomAlert alerta={alerta} />}
                        </div>
                      </form>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <div className="flex md:flex justify-center md:mr-4">
                  <h3 className="bebas-neue-regular mt-3 text-red-500 text-3xl font-bold text-center">
                    Error 404 Pagina No Encontrada
                  </h3>
                </div>

                <div className="flex justify-center p-4">
                  {" "}
                  <nav>
                    <Link
                      className="roboto-condensed text-center underline my-5 text-gray-900 hover:text-orange-600 hover:font-bold"
                      to="/"
                    >
                      Acceder a Plataforma
                    </Link>
                  </nav>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CambiarPassword;
