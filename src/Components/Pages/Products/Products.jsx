import React from "react";
import Productos from "../../Mocks/Products.json";
import { Link } from "react-router-dom";
import IconWha from "../../Global/IconWha";
import { UseCart } from "../../Hooks/UseCart";
const Products = () => {
  const { addCart, checkProductInCart, removeFromCart } = UseCart();

 

  return (
    <section>
      <h1 className="text-2xl font-bold mb-10 text-center">PRODUCTOS</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-x-10 justify-items-center">
        {Productos.map((item) => {
          const isProductCart = checkProductInCart(item);
          return (
            <article
              key={item.title}
              className="w-5/6 bg-white  mx-auto pb-3 rounded-xl overflow-hidden  max-w-[300px]  hover:scale-[1.05] hover:shadow-xl relative z-10  transition-all duration-200 group"
            >
              <Link
                to={`/producto/${item.id}`}
                className="overflow-hidden block"
              >
                <img
                  src={item.img}
                  alt=""
                  className=" object-cover h-[305px] w-full lg:h-[300px] group-hover:scale-[1.2] transition-transform  duration-300 "
                />
              </Link>

              <div className="p-4">
                <h1 className="text-xl">{item.title}</h1>
                <p>{item.info.slice(0, 60) + "..."}</p>

                <div className="flex text-2xl font-bold font-mono mt-7 justify-between items-center">
                  <strong>${item.price}</strong>
                  <IconWha textDefault="este es el mensaje" />
                </div>

            <div className="flex justify-center mt-6">
            <button
                  onClick={() => {
                   isProductCart ? removeFromCart(item) : addCart(item)
                  }}
                  className={`${isProductCart ? "bg-red-500" : ""}`}
                >
                  {isProductCart ? "quitar" : "Añadir"}
                </button>
            </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
