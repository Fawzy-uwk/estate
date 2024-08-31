import { useState } from "react";
import { FaBars, FaBuilding, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { userData } from "../Lib/Dummy";

/*eslint-disable react/prop-types */
function Navbar({ user, setUser }) {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="nav overflow-x-hidden px-4 py-8 h-20 overflow-hidden flex items-center justify-between">
      <div className="flex items-center gap-7 ">
        <a href="/" className="flex items-center gap-1">
          <FaBuilding color="#536cb0" size={35} />
          <h1 className="bg-gradient-to-r from-[#536cb0] via-[#d1b899] to-[#9ec37c] text-2xl font-[900] inline-block text-transparent bg-clip-text">
            ReactEstate
          </h1>
        </a>

        <ul className="list hidden  md:flex items-center gap-7 ">
          <Link to="/" className="hover:text-[#9ec37c]">
            Home
          </Link>
          <Link to="/list" className="hover:text-[#9ec37c]">
            Explore
          </Link>
          <Link to="/" className="hover:text-[#9ec37c]">
            Contact
          </Link>
          <Link to="/" className="hover:text-[#9ec37c]">
            Agents
          </Link>
        </ul>
      </div>

      {user ? (
        <div className="user">
          <Link to="/profile" className="flex items-center gap-2">
            <img src={userData.img} alt="" />
            <span className="hover:text-[#536cb0] ">{userData.name}</span>
          </Link>

          <button
            className="px-4 py-3 bg-[#536cb0] text-white rounded-sm hover:scale-110 transition-all "
            onClick={() => setUser(false)}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="md:flex hidden list items-center gap-3 ">
          <Link
            to={"/login"}
            className="px-4 py-3 bg-[#536cb0] text-white rounded-sm"
          >
            Sign In
          </Link>
          <Link
            to={"/register"}
            className="px-4 py-3 bg-[#d1b899] text-white rounded-sm"
          >
            Signup
          </Link>
        </div>
      )}

      <FaBars
        size={30}
        className="md:hidden"
        onClick={() => setMenu((prev) => !prev)}
      />
      <div
        className={`menu absolute top-0 right-0 md:hidden z-50 ${
          menu ? "block" : "hidden"
        } bg-black min-h-[100dvh] w-[50%] flex items-center justify-center`}
      >
        <FaTimes
          size={25}
          color="white"
          className="absolute right-2 top-2"
          onClick={() => setMenu((prev) => !prev)}
        />

        <ul className="flex items-center flex-col gap-8 text-white ">
          <Link to="/" className="hover:text-[#9ec37c]">
            Home
          </Link>
          <Link to="/list" className="hover:text-[#9ec37c]">
            Explore
          </Link>
          <Link to="/" className="hover:text-[#9ec37c]">
            Contact
          </Link>
          <Link to="/" className="hover:text-[#9ec37c]">
            Agents
          </Link>

          <Link
            to={"/login"}
            className="px-4 py-3 bg-[#536cb0] text-white rounded-sm"
          >
            Sign In
          </Link>
          <Link
            to={"/register"}
            className="px-4 py-3 bg-[#d1b899] text-white rounded-sm"
          >
            Signup
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
