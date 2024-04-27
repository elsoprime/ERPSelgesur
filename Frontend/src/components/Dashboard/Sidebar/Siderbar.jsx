import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { RiCloseLine } from "react-icons/ri";

import Navbar from "../Navbar/Navbar";

const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = ()=> {
    setSidebar(!sidebar);
  }

  return (
    <>
      <div className={`fixed xl:static top-0 z-50 w-[85%] md:w-[85%] lg:w-[85%] xl:w-full ${sidebar ? "-left-0" : "-left-full" } h-full col-span-1
       bg-gradient-to-tr from-gray-50 to-gray-200 border-r transition-all`}>
        {/** Logotipo Dashboard */}
        <div className=" flex items-center justify-center p-2">
          <img
            className="w-64 h-auto"
            src="/LogoSelgesur.png"
            alt="LogoEmpresa"
          />
        </div>
        <div className="text-center p-8">
          <h1 className="uppercase font-bold tracking-4 bebas-neue-regular text-4xl text-sky-600">
            {" "}
            Plataforma{" "}
          </h1>
        </div>
        {/** Navbars */}
        <Navbar />
      </div>
      {/** Menu Movil */}
      <button className=" block xl:hidden fixed bottom-4 right-4 bg-sky-500 text-xl text-white p-2 rounded-full z-40"
        onClick={handleSidebar}
      >
        {sidebar ? <RiCloseLine/> : <TiThMenu /> }
       
      </button>
    </>
  );
};

export default Sidebar;
