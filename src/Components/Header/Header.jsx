import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Islogin from "../Auth/SubMenu/IsLogin";
import NoLogin from "../Auth/SubMenu/NoLogin";
import { Link } from "react-router-dom";
import Cart from "../Pages/cart/Cart";
import { RiHome2Line, RiServiceLine, RiProductHuntLine, RiUser3Line } from "react-icons/ri";
const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <header className="bg-primary-500 top-0 left-0 w-full h-[10vh] flex items-center justify-between px-4 lg:pr-10 font-serif fixed z-20">
      <Link to={"/"} className="flex gap-x-2 items-center cursor-pointer">
        <img src="./logo.png" alt="" width={50} />
        <span className=" font-[cursive] font-bold">SpaGlam</span>
      </Link>

      <nav className="fixed lg:static bottom-3 left-1/2 -translate-x-1/2  lg:translate-x-0 flex bg-primary-500/40 lg:bg-transparent px-4 py-2 rounded-full z-10 backdrop-blur-sm">
        <Link
          to="/"
          className="text-primary-100 lg:text-black flex items-center text-2xl lg:text-sm lg:font-semibold p-2"
        >
          <RiHome2Line className="lg:hidden text-gray-500 text-3xl block"/>
          <span className="hidden lg:block transition-colors duration-500">
            HOME
          </span>
        </Link>


        <Link
          to="/servicios"
          className="text-black flex items-center text-2xl lg:text-sm lg:font-semibold p-2"
        >
          <RiServiceLine className="lg:hidden text-gray-500 text-3xl block"/>

          <span className="hidden lg:block transition-colors duration-500">
            SERVICIOS
          </span>
        </Link>
        <Link
          to="productos"
          className="text-black flex items-center text-2xl lg:text-sm lg:font-semibold p-2"
        >
          <RiProductHuntLine className="lg:hidden text-gray-500 text-3xl block"/>

          <span className="hidden lg:block transition-colors duration-500">
            PRODUCTOS
          </span>
        </Link>


        <Link
          to="/sobre/nosotros"
          className="text-black flex items-center text-2xl lg:text-sm lg:font-semibold p-2"
        >
          <RiUser3Line className="lg:hidden text-gray-500 text-3xl block"/>

          <span className="hidden lg:block transition-colors duration-500">
            NOSOTROS
          </span>
        </Link>

        <Link
          to="/tips"
          className="text-black flex items-center text-2xl lg:text-sm lg:font-semibold p-2"
        >
          <span className="hidden lg:block transition-colors duration-500">
            TIPS
          </span>
        </Link>
      </nav>

      <div className="flex justify-center items-center gap-x-10">
        <Cart />
        <div>{isAuthenticated ? <Islogin /> : <NoLogin />}</div>
      </div>
    </header>
  );
};

export default Header;
