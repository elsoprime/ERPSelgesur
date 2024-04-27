// Autor: @elsorprimeDEV
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import AdminLayout from "./layout/AdminLayout";

//Importando paginas públicas
import Login from "./pages/Public/Login";
import Registrar from "./pages/Public/Registrar";
import OlvidePassword from "./pages/Public/OlvidePassword";
import Confirmar from "./pages/Public/Confirmar";
import NuevoPassword from "./pages/Public/NuevoPassword";

//Importando paginas privadas
import {Home, GestiónAlmacen} from "./pages/Private/Home";
import { GestionPersonas, RegistrarPersonas } from "./pages/Private/RecursosHumanos";
import Perfil from "./pages/Private/Perfil";


import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/** Definimos las Rutas de acceso público */}
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="registrar" element={<Registrar />} />
            <Route path="olvide-password" element={<OlvidePassword />} />
            <Route path="olvide-password/:token" element={<NuevoPassword />} />
            <Route path="confirmar/:id" element={<Confirmar />} />
          </Route>

          {/** Definimos las Rutas de acceso privado */}
          <Route>
            <Route path="/home" element={<AdminLayout />}>
              <Route index element={<Home/>} />
              <Route path="gestion-personas" element={<GestionPersonas/>} />
              <Route path="registrar-persona" element={<RegistrarPersonas/>} />
              <Route path="gestion-almacen" element={<GestiónAlmacen/>} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
