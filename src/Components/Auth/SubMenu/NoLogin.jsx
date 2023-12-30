import React from 'react'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css'

import {RiArrowDownSLine, RiSettings4Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ButtonLogin from '../ButtonsLogin/ButtonLogin';
import { useAuth0 } from '@auth0/auth0-react';
const NoLogin = () => {
const {isLoading} = useAuth0()
if(isLoading){
  return <div>...loading</div>
}
  return (
    <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-4 py-2 px-4 lg:mr-4  rounded-xl transition-colors text-black">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                alt=""
                className="w-6 h-6"
                
              />

              <RiArrowDownSLine />
            </MenuButton>
          }
          align="end"
          transition
    
        >
          <MenuItem className="border-b  mb-3 rounded-xl text-black ">
            <div
              className="flex gap-y-2 items-center flex-col justify-center py-2 w-full"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                alt=""
                className="w-6 h-6"
              />
              <div className="text-center">
                <h4>....</h4>
                <span className="text-xs text-gray-500">
                  .............
                </span>
              </div>
            </div>
          </MenuItem>
         

          <MenuItem className="transition-colors  mb-3 rounded-xl cursor-default p-0">
            <ButtonLogin/>
          </MenuItem>
        </Menu>
  )
}

export default NoLogin