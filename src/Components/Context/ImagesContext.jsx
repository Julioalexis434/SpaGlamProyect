import { createContext, useState } from "react";

export const ImagesContext = createContext();

export function ImagesProvider({ children }) {
    const [toggleImage, setToggleImage] = useState(false);
    const [displayImage, setDisplayImage] = useState("");


    function openImage(img, Images) {
        const image = Images.find((item) => item.id === img.id);
        setDisplayImage(image.img);
        setToggleImage(true)
      }

      function closeImage(){
        setToggleImage(false)
      }

  return (
    <ImagesContext.Provider
      value={{
            toggleImage,
            displayImage,
            openImage,
            closeImage

      }}
    >
      {children}
    </ImagesContext.Provider>
  );
}
