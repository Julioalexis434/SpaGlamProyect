import { useContext } from "react";
import { ServiceContext } from "../Context/ServiceContext";

  export const  UseServices = ()=>{
    const context = useContext(ServiceContext)


    return context
  }