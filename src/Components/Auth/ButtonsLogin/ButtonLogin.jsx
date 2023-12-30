import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { RiLoginCircleLine, RiLogoutBoxLine } from "react-icons/ri";
const ButtonLogin = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div>
      <button
        onClick={() => {
          loginWithRedirect();
        }}
        className={`flex gap-x-4 items-center w-full px-4 py-2 bg-transparent text-black`}
      >
        <RiLoginCircleLine />
        Iniciar sesion
      </button>

      
    </div>
  );
};

export default ButtonLogin;
