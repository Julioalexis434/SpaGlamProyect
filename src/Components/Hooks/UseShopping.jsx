import { useContext } from "react";
import { ShoppingContext } from "../Context/ShoppingContext";

export function UseShopping() {
  const context = useContext(ShoppingContext);

  return context;
}
