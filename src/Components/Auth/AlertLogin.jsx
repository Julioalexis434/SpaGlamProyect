import React from "react";
import ButtonLogin from "./ButtonsLogin/ButtonLogin";

const AlertLogin = () => {
  return (
    <div className="fixed top-0 left-0 bg-black/70 flex justify-center items-center w-full h-full">
      <div className="bg-white p-6 rounded-lg">
        <h4>DEBES INICIAR SESION</h4>
        <div className="bg-primary-100 rounded-lg mt-10">
          <ButtonLogin />
        </div>
      </div>
    </div>
  );
};

export default AlertLogin;
