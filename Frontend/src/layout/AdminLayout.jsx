import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import Sidebar from "../components/Dashboard/Sidebar/Siderbar";
import Header from "../components/Dashboard/Header/Header";

const AdminLayout = () => {
  const { auth, cargando } = useAuth();

  if (cargando) return "Cargando...";

  return (
    <>

      {auth?._id ? <div className="min-h-screen grid grid-col-1 md:grid-cols-6 lg:grid-cols-6">
        <Sidebar />
        <div className="col-span-5 md:col-span-6 lg:col-span-6 xl:col-span-5 bg-slate-50 roboto-condensed">
          <Header />
          {/** Importamos Contenido dinamico */}
          <Outlet />
        </div>
      </div> : <Navigate to="/" />
      }
    </>
  );
};

export default AdminLayout;
