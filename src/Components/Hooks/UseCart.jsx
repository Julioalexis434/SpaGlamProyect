import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const UseCart = () => {
  const context = useContext(CartContext);
  
  return context;
};
