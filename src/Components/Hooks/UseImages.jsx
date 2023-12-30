import { useContext } from "react";
import { ImagesContext } from "../Context/ImagesContext";

  export const  UseImages = ()=>{
    const context = useContext(ImagesContext)


    return context
  }