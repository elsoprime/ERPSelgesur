// Autor: @elsoprimeDEV
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {clienteAxios} from "../../../config/axios";
import Alerta from "../../Alertas/Alertas";

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
      <div className="flex justify-center min-h-screen">
        {/** Cuerpo del Formulario de Login */}
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
          
            <div className="flex md:flex justify-center md:mr-4">
              <img src="/LogoSelgesur.png" alt="Logo" className="w-96 h-auto" />
            </div>
            {(cuentaConfirmada || alerta.error) && (
              <>
                <div className="flex md:flex justify-center md:mr-4"> 

                { cuentaConfirmada ? <h3 className="bebas-neue-regular mt-3 text-green-500 text-3xl font-bold text-center">                  
                    Gracias por Confirmar tu Cuenta
                  </h3> : <h3 className="bebas-neue-regular mt-3 text-red-500 text-3xl font-bold text-center">                  
                    Error 404 Pagina No Encontrada
                  </h3>
                
                }
                  
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

export default ConfirmarCuenta;
