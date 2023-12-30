import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
const ButtonLogout = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className={`flex gap-x-4 items-center w-full px-4 py-2  bg-transparent text-black`}
    >
      <RiLogoutBoxLine />
      cerrar sesion
    </button>
  );
};

export default ButtonLogout;
