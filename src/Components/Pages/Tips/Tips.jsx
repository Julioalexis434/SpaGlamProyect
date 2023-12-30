import React from "react";
import Images from "../../Mocks/Imagenes.json";
import { RiCloseLine } from "react-icons/ri";
import { UseImages } from "../../Hooks/UseImages";
const Tips = () => {
  const { openImage, closeImage, toggleImage, displayImage } = UseImages();

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Images.slice(0,14).map((item, index) => (
          <div key={index}>
            <img
              src={item.img}
              alt={item.img}
              className="w-full h-auto rounded-lg shadow-md aspect-video object-cover cursor-pointer hover:opacity-[.5]"
              onClick={() => {
                openImage(item, Images);
              }}
            />
          </div>
        ))}
      </div>

      <div
        className={`fixed w-full h-full top-0 left-0 justify-center items-center bg-black/50 z-20 p-8 ${
          toggleImage ? "flex" : "hidden"
        }`}
      >
        <img
          src={displayImage}
          alt=""
          width={500}
          className="h-full object-contain rounded-lg"
        />
        <span
          className="absolute p-3 top-4 right-4 bg-primary-100 rounded-full"
          onClick={() => {
            closeImage()
          }}
        >
          <RiCloseLine />
        </span>
      </div>
    </section>
  );
};

export default Tips;
