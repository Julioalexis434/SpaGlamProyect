import React from "react";
import { useParams } from "react-router-dom";
import Products from "../../Mocks/Products.json";
import { UseCart } from "../../Hooks/UseCart";

const ProductDetail = () => {
  const { id } = useParams();
  const product = Products.find((item) => item.id === parseInt(id));
  const { addCart, removeFromCart, checkProductInCart } = UseCart();
  const isProductCart = checkProductInCart(product);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="lg:pl-10">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="p-2 col-span-4">
          <img
            src={product.img}
            alt=""
            className="rounded-xl w-5/6  lg:w-auto mx-auto  object-cover h-[510px]"
          ></img>
        </div>

        <div className="px-8 col-span-8">
          <div className="mb-10 flex flex-col  lg:justify-center gap-3">
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <div className="mb-5">
              <h2 className="font-bold">Detalles:</h2>
              <p className="text-sm lg:text-lg">{product.info}</p>
            </div>
           <div className="flex justify-between items-center">
           <div className="flex flex-col gap-y-4 lg:flex-row lg:justify-between mb-4 text-s">
              <h1 className="text-xl font-bold font-mono">${product.price}</h1>
            </div>
            <div>
              <button
                onClick={() => {
                  isProductCart ? removeFromCart(product) : addCart(product);
                }}
                className={`${isProductCart ? "bg-red-500" : ""}`}
              >
                {isProductCart ? "quitar" : "Añadir"}
              </button>
            </div>
           </div>
          </div>

          <div>
            <h1>Uso:</h1>
            {product.use.map((item) => {
              return (
                <div key={item.title} className="mb-10">
                  <h1 className="text-xl text-gray-500">{item.title}</h1>
                  <p>{item.info}</p>
                </div>
              );
            })}
          </div>

          <div>
            <h1>Riesgos para la salud</h1>
            {product.riesgo.map((item) => {
              return <p key={item.title}>{item.info}</p>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
