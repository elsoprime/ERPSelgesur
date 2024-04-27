import {BGAnimatedRecovery} from "../../BGAnimated";

const AsideNewPassword = () => {
  return (
   
   <>
   <div className="hidden lg:block lg:w-2/3 relative overflow-hidden">
        <BGAnimatedRecovery />
        {/** Componente aplicado para el fondo animados con transiciones */}
        <div className="absolute inset-0 flex items-center justify-center px-20 bg-gray-900 bg-opacity-40 text-white">
          <div className="roboto-condensed">
            <h2 className="text-5xl font-bold">
              Plataforma de Gestión y Recursos
            </h2>
            <p className="max-w-xl mt-3 font-light text-gray-300">
              Aplicación para procesos de gestión y recursos administrativos.
            </p>
          </div>
        </div>
      </div>   
   </>
   
  )
}

export default AsideNewPassword;