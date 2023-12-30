import { createContext, useState } from "react";
import { isMobile } from "react-device-detect";

export const ServiceContext = createContext();

export function ServiceProvider({ children }) {
    const [nombre, setNombre] = useState("");
    const [servicio, setServicio] = useState("corte");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");

     
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleServicioChange = (e) => {
    setServicio(e.target.value);
  };

  const handleFechaChange = (e) => {
    setFecha(e.target.value);
  };

  const handleHoraChange = (e) => {
    setHora(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hola, mi nombre es ${nombre} y quisiera agendar un cita el dia ${fecha} a la ${hora} para el servicio de ${servicio}`;
    const phoneNumber = "0979501005";

    if (isMobile) {
      window.open(
        `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
          text
        )}`
      );
    } else {
      window.open(
        `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          text
        )}`
      );
    }
  };


  return (
    <ServiceContext.Provider
      value={{
        handleNombreChange,
        handleServicioChange,
        handleFechaChange,
        handleHoraChange,
        handleSubmit

      }}
    >
      {children}
    </ServiceContext.Provider>
  );
}
