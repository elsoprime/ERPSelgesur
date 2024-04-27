import { useEffect, useState } from "react";

const Alerta = ({ alerta }) => {
  const [visible, setVisible] = useState(false);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (alerta.msg) {
      setMensaje(alerta.msg);
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
        setMensaje("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [alerta]);

  if (!mensaje || !visible) return null;

  return (
    <div
      className={`${
        alerta.error ? "from-red-400 to-red-600" : "from-green-400 to-green-600"
      } bg-gradient-to-r text-white text-center p-3 rounded text-sm mb-10 py-2`}
    >
      {mensaje}
    </div>
  );
};

const AlertaAnimada = ({ alerta }) => {
  return <>
  
  
  </>;
};

export default Alerta;
