import React from "react";
import { RiWhatsappLine } from "react-icons/ri";
import { isMobile } from "react-device-detect";

const IconWha = ({textDefault}) => {
  const phoneNumber = "0979501005";
  const message = textDefault; 


  const whatsappLinkWeb = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;
  const whatsappLinkMovil = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  function onclick() {
    if (isMobile) {
      window.location.href = whatsappLinkMovil;
    } else {
      window.open(whatsappLinkWeb)
    }
  }

  return (
    <RiWhatsappLine
      onClick={() => {
        onclick();
      }}
   className="cursor-pointer" />
  );
};

export default IconWha;
