import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

/*eslint-disable react/prop-types */
function Layout({ user, setUser }) {
  return (
    <div className="layout max-w-[1366px] bg-[#fffefc] mx-auto px-6 h-screen flex flex-col gap-8">
      <Navbar user={user} setUser={setUser} />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
