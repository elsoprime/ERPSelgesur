import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import clienteAxios from "../config/axios";
import CustomAlert from "./Alertas/Alertas";
import useAuth from "../hooks/useAuth";

// Formulario de Login
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
      const { data } = await clienteAxios.post('/usuarios/login', { email, password });
      localStorage.setItem("token", data.token);
      setAuth(data);
      navigate('/admin');
      
      
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div className="relative grid grid-cols-1">
        <div className="flex md:flex justify-center md:mr-4">
          <img src="/LogoSelgesur.png" alt="Imagen" className="w-64 h-auto" />
        </div>

        <div className="md:flex md:justify-center md:mr-4">
          <div className="mt-20 md:mt-5 px-10 py-8 rounded-xl bg-gradient-to-br from-slate-200 to-slate-400 shadow-xl backdrop-filter backdrop-blur-sm">
            {/** Cabecera del Formulario de Login */}
            <div className="grid grid-cols-1 items-center ">
              <div className="text-center md:text-left">
                <h2 className="text-gray-700 font-sans text-5xl text-center">
                  Plataforma de Gestión <br />
                  <span className="text-blue-700 font-black text-4xl mt-2">
                    Inicia tu Sesión
                  </span>
                </h2>
              </div>
            </div>
            <hr className="border-t border-gray-200 mt-5 mx-auto" />{" "}
            {/** Cuerpo del Formulario de Login */}
            <div className="grid grid-cols-1 items-center ">
              <form onSubmit={handleSubmit}>
                <div className="mt-8 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <label className="block text-xl font-semibold leading-6 text-gray-600">
                    Nombre Usuario:
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      placeholder="Ingresa tu Correo Electronico"
                      className="block w-full rounded-md border-0 
                      px-3.5 py-2 text-gray-600 shadow-sm ring-1 
                      ring-inset ring-gray-300 placeholder:text-gray-400 
                      focus:ring-2 focus:ring-inset
                      focus:ring-blue-600 sm:text-sm sm:leading-6"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-8 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <label className="block text-xl font-semibold leading-6 text-gray-600">
                    Contraseña:
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      placeholder="Ingresa tu Contraseña"
                      className="block w-full rounded-md border-0 
                        px-3.5 py-2 text-gray-600 shadow-sm ring-1 
                        ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset
                        focus:ring-blue-600 sm:text-sm sm:leading-6"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <input
                  type="submit"
                  value="Acceso Plataforma"
                  className=" mt-8 bg-blue-600 w-full py-3 px-10 rounded-xl
                  text-white uppercase font-bold hover:cursor-pointer hover:bg-indigo-800"
                />
              </form>
              <div>
                <nav className="mt-10">
                  <Link
                    className="block text-center my-5 text-white hover:text-indigo-600"
                    to="/registrar"
                  >
                    ¿No tienes una cuenta? Registrate
                  </Link>
                  <Link
                    className="block text-center my-5 text-white hover:text-indigo-600"
                    to="/olvide-password"
                  >
                    ¿Olvidate tu Contraseña? Recupera tu Acceso
                  </Link>
                </nav>
              </div>
              {msg && <Alerta alerta={alerta} />}
            </div>
          </div>
        </div>

        <div className="items-center">3</div>
        
      </div>
    </>
  );
};

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

  return (
    <>
      <div className="relative grid grid-cols-1">
        <div className="flex md:flex justify-center md:mr-4">
          <div
            className="mt-20 md:mt-5 px-10 py-8 rounded-xl bg-gradient-to-br
           from-slate-200 to-slate-400 shadow-lg backdrop-filter backdrop-blur-sm"
          >
            <div>
              <h2 className="text-slate-600 font-bold text-3xl text-center">
                No tienes una Cuenta?{" "}
                <span className="text-amber-600 font-black">Registrate</span>
              </h2>
            </div>
            <hr className="border-t border-gray-200 mt-5 mx-auto" />{" "}
            {/* Línea debajo de la imagen */}
            <form onSubmit={handleSubmit}>
              <div className="mt-8 gap-x-8 gap-y-6 sm:grid-cols-2">
                <label className="block text-xl font-semibold leading-6 text-slate-600">
                  Nombre Completo
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    placeholder="Ingresa tu nombre completo"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-300 sm:text-sm sm:leading-6"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-8 gap-x-8 gap-y-6 sm:grid-cols-2">
                <label className="block text-xl font-semibold leading-6 text-slate-600">
                  Correo Electronico
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    placeholder="Ingresa tu dirección de correo electronico"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-300 sm:text-sm sm:leading-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-8 gap-x-8 gap-y-6 sm:grid-cols-2">
                <label className="block text-xl font-semibold leading-6 text-slate-600">
                  Contraseña
                </label>
                <div className="mt-2.5">
                  <input
                    type="password"
                    placeholder="Ingresa una contraseña"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-300 sm:text-sm sm:leading-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-8 gap-x-8 gap-y-6 sm:grid-cols-2">
                <label className="block text-xl font-semibold leading-6 text-slate-600">
                  Repetir Contraseña
                </label>
                <div className="mt-2.5">
                  <input
                    type="password"
                    placeholder="Vuelve a repetir tu contraseña"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-300 sm:text-sm sm:leading-6"
                    value={repetirPassword}
                    onChange={(e) => setRepetirPassword(e.target.value)}
                  />
                </div>
              </div>

              <input
                type="submit"
                value="Registrar Cuenta"
                className=" mt-8 bg-green-600 w-full 
                        py-3 px-10 rounded-xl text-white uppercase
                         font-bold hover:cursor-pointer
                         hover:bg-green-800"
              />
            </form>
            <nav className="mt-2">
              <Link
                className="block text-center my-5 text-white hover:text-indigo-600 "
                to="/"
              >
                ¿Ya tienes una cuenta? Inicia sesión
              </Link>
              <Link
                className="block text-center my-5 text-white hover:text-indigo-600 "
                to="/olvide-password"
              >
                ¿Olvidate tu Contraseña? Recupera tu Acceso
              </Link>
            </nav>
            <div> {alerta.msg && <Alerta alerta={alerta} />} </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Formulario de Recuperación de Cuentas
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
      <div className="relative grid grid-cols-1">
        <div className="flex md:flex justify-center md:mr-4">
          <img src={LogoSelgesur} alt="Imagen" className="w-96 h-auto" />
        </div>

        <div className="flex md:flex justify-center md:mr-4">
          <div
            className="mt-20 md:mt-5 px-10 py-8 rounded-xl 
            bg-gradient-to-br from-slate-200
             to-slate-400 shadow-lg backdrop-filter backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 items-center">
              <h2 className="text-gray-600 font-bold text-3xl text-center">
                Olvidaste tu Cuenta?{" "}
                <span className="text-blue-500 font-bold">
                  Recupera tu Cuenta
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 items-center">
              <hr className="border-t border-gray-200 mt-5 mx-auto" />
            </div>
            <div className="grid grid-cols-1 items-center">
              <form onSubmit={handleSubmit}>
                <div className="mt-8 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <label className="block text-xl font-semibold leading-6 text-gray-600">
                    Correo Electronico
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      placeholder="Ingresa tu dirección de correo electronico"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <input
                  type="submit"
                  value="Recuperar Cuenta"
                  className=" mt-8 bg-blue-500 w-full py-3 px-10 rounded-xl text-white uppercase
                         font-bold hover:cursor-pointerhover:bg-blue-600"
                />
              </form>
            </div>
            <div className="grid grid-cols-1 items-center">
              <nav className="mt-10">
                <Link
                  className="block text-center my-5 text-white hover:text-indigo-600 "
                  to="/"
                >
                  ¿Ya tienes una cuenta? Inicia sesión
                </Link>
                <Link
                  className="block text-center my-5 text-white hover:text-indigo-600 "
                  to="/registrar"
                >
                  ¿No tienes una Cuenta? Registrate
                </Link>
              </nav>{" "}
              {msg && <Alerta alerta={alerta} />}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Formulario de Confirmación de Cuentas
const ConfirmarCuenta = () => {
  const params = useParams();
  const { id } = params;

  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const { data } = await clienteAxios.get(`/usuarios/confirmar/${id}`);
        setCuentaConfirmada(true);
        setAlerta({ msg: data.msg });
      } catch (error) {
        setAlerta({
          msg:
            error.response?.data?.msg ||
            "Ha ocurrido un Error al confirmar la cuenta",
          error: true,
        });
      }
      setCargando(false);
    };

    confirmarCuenta();
  }, [id]);

  return (
    <>
      <div className="mt-20 md:mt-5 px-10 py-8 rounded-xl bg-slate-800 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="md:flex md:justify-center md:items-center mb-6">
          <img
            src={LogoSelgesur}
            alt="Imagen"
            className="w-96 h-auto mx-auto"
          />
        </div>
        <hr className="border-t border-gray-200 mt-5 mx-auto" />

        <div className="mt-8 gap-x-8 gap-y-6 sm:grid-cols-2">
          <h2 className="text-gray-200 font-bold text-4xl text-center">
            Confirmando tu Cuenta de Acceso
          </h2>
        </div>

        <div className="mt-5">
          {!cargando && <Alerta alerta={alerta} />}

          {(cuentaConfirmada || alerta.error) && (
            <nav className="mt-10">
              <Link
                className="block text-center my-5 text-white hover:text-indigo-600"
                to="/"
              >
                Acceder a Plataforma, Iniciar Sesión
              </Link>
            </nav>
          )}
        </div>
      </div>
    </>
  );
};

// Formulario de Cambio de Password "Contraseña"
const CambiarPassword = () => {
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const [tokenValido, setTokenValido] = useState(false);
  const [passwordModificado, setPasswordModificado] = useState(false);

  const params = useParams();
  const { token } = params;

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
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div className="relative mt-20 md:mt-5 px-10 py-8 rounded-xl bg-slate-800 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div>
          <h2 className="text-white font-sans text-3xl text-center">
            Restablece tu Contraseña{" "}
          </h2>
        </div>
        <hr className="border-t border-gray-200 mt-5 mx-auto" />{" "}
        {/* Línea debajo de la imagen */}
        <div className="md:flex md:justify-center md:mr-4">
          <img src={LogoSelgesur} alt="Imagen" className="w-96 h-auto" />{" "}
        </div>
        <div className="mt-8 gap-x-8 gap-y-6 sm:grid-cols-2">
          {" "}
          {alerta.msg && <Alerta alerta={alerta} />}
        </div>
        {!passwordModificado && tokenValido && (
          <form onSubmit={handleSubmit}>
            <div className="mt-8 gap-x-8 gap-y-6 sm:grid-cols-2">
              <label className="block text-xl font-semibold leading-6 text-white">
                Escribe tu Nueva Contraseña
              </label>
              <div className="mt-2.5">
                <input
                  type="password"
                  placeholder="Cambiar contraseña"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <input
              type="submit"
              value="Restablecer tu Contraseña"
              className="mt-8 bg-green-600 w-full py-3 px-10 rounded-xl text-white uppercase font-bold hover:cursor-pointer hover:bg-green-800"
            />
          </form>
        )}
        {passwordModificado && (
          <nav className="mt-10">
            <Link
              className="block text-center my-5 text-white hover:text-indigo-600 "
              to="/"
            >
              Vuelve a Iniciar sesión con tu cuenta
            </Link>
          </nav>
        )}
      </div>
    </>
  );
};

export {
  AccesoLogin,
  RegistroUsuario,
  RecuperarPassword,
  ConfirmarCuenta,
  CambiarPassword,
};
