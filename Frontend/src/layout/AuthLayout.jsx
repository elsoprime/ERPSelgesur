import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-white via-gray-300 to-gray-400">
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;