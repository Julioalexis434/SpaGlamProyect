import React from "react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { RiArrowDownSLine, RiSettings4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ButtonLogout from "../ButtonsLogin/ButtonLogout";
const Islogin = () => {
const {user, isLoading} =  useAuth0()
if(isLoading){
    return <div>...loading</div>
}

  return (
    <Menu
      menuButton={
        <MenuButton className="flex items-center gap-x-4 py-2 px-4 lg:mr-4  rounded-xl transition-colors text-black">
          <img
            src={user.picture}
            alt=""
            className="w-6 h-6 rounded-full"
          />

          <RiArrowDownSLine />
        </MenuButton>
      }
      align="end"
      transition
    >
      <MenuItem className="border-b  mb-3 rounded-xl text-black ">
        <div className="flex gap-y-2 items-center flex-col justify-center py-2 w-full">
          <img
            src={user.picture}
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div className="text-center">
            <h4>{user.name}</h4>
            <span className="text-xs text-gray-500">{user.email}</span>
          </div>
        </div>
      </MenuItem>
      

      <MenuItem className="transition-colors  mb-3 rounded-xl cursor-default p-0">
        <ButtonLogout />
      </MenuItem>
    </Menu>
  );
};

export default Islogin;
