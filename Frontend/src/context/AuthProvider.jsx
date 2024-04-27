import { useState, useEffect, createContext } from "react";
import { clienteAxios } from "../config/axios";

// Crear el contexto de autenticación
const AuthContext = createContext();

// Definir el proveedor de autenticación
const AuthProvider = ({ children }) => {
  // Estado para mantener el estado de autenticación
  const [cargando, setCargando] = useState(true);
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      
      if (!token) {
        setCargando(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      try {

        const { data } = await clienteAxios('/usuarios/perfil', config);
        setAuth(data);       
        
      } catch (error) {
        console.log(error.response.data.msg);
        setAuth({});
      }

      setCargando(false);      
    }
    autenticarUsuario();
  }, []);

  // Cerra Sesión del Usuario
  const cerrarSesion = ()=> {
    localStorage.removeItem('token');
    setAuth({});
  }


  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cargando,
        cerrarSesion
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

// Exportar Contexto
export { AuthContext };
