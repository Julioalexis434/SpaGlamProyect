import { createContext, useState} from "react";
import { isMobile } from "react-device-detect";
import { UseCart } from "../Hooks/UseCart";

export const ShoppingContext = createContext();

export function ShoppingProvider({ children }) {
    const { cart, setCart } = UseCart();
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [metodoDePago, setMetodoDePago] = useState("tarjeta");
    const [correoElectronico, setCorreoElectronico] = useState("");


    const handleNombreChange = (e) => {
        setNombre(e.target.value);
      };
    
      const handleApellidoChange = (e) => {
        setApellido(e.target.value);
      };
    
      const handleUbicacionChange = (e) => {
        setUbicacion(e.target.value);
      };
    
      const handleTelefonoChange = (e) => {
        setTelefono(e.target.value);
      };
    
      const handleMetodoDePagoChange = (e) => {
        setMetodoDePago(e.target.value);
      };
    
      const handleCorreoElectronicoChange = (e) => {
        setCorreoElectronico(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Hola, mi nombre es ${nombre} ${apellido} quiero realizar una compra por el metodo de pago ${metodoDePago} de los siquientes productos ${cart.map(
          (item) => {
            return item.title;
          }
        )} me encuentro ubicad@ en ${ubicacion} mi numero de telefono es ${telefono} y mi email es ${correoElectronico}. " Valor total de la compra: ${cart.reduce((a,b) => a + b.totalPrice, 0)}"`;
        const phoneNumber = "0979501005";
    
        if (isMobile) {
          window.open(
            `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`
          );
        } else {
          window.open(
            `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
              text
            )}`
          );
        }
        setCart([])
      };

  return (
    <ShoppingContext.Provider value={{
        nombre,
        apellido,
        ubicacion,
        telefono,
        metodoDePago,
        correoElectronico,
        handleNombreChange,
        handleApellidoChange,
        handleUbicacionChange,
        handleTelefonoChange,
        handleMetodoDePagoChange,
        handleCorreoElectronicoChange,
        handleSubmit,
        cart
    }}>
      {children}
    </ShoppingContext.Provider>
  );
}
