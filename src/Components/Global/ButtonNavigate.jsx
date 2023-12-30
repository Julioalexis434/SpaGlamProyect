import React from "react";
import { Navigate } from "react-router-dom";

const ButtonNavigate = (text, url) => {
    const navigate = Navigate()
  return (
    <div>
      <button onClick={() => {
        navigate(url)
      }}>{text}</button>
    </div>
  );
};

export default ButtonNavigate;
