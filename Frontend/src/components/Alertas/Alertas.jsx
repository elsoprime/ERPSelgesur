import { useEffect, useState } from "react";
import { Alert, Typography, Slide } from "@mui/material";

const CustomAlert = ({ alerta }) => {
  const [visible, setVisible] = useState(false);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (alerta.msg) {
      setMensaje(alerta.msg);
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
        setMensaje("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alerta]);

  if (!mensaje || !visible) return null;

  return (   
      <Slide direction="right" in={visible} mountOnEnter unmountOnExit>
        <Alert
          severity={alerta.error ? "error" : "success"}
          onClose={() => setVisible(false)}
          variant="filled"
          className="max-w-screen-md mx-auto my-4 p-4 rounded-lg shadow-xl"
          sx={{ transition: "opacity 0.3s ease" }} // Personalización de la transición de fundido
        >
          <Typography variant="h6" color="inherit" className="font-bold">
            {alerta.error ? "" : ""}
          </Typography>
          <Typography color="inherit" className="mt-2">
            {mensaje}
          </Typography>
        </Alert>
      </Slide>    
  );
};

export default CustomAlert;
