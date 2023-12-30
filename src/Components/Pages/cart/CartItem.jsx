import React from "react";
import { RiDeleteBin4Line } from "react-icons/ri";
import { UseCart } from "../../Hooks/UseCart";
const CartItem = ({ item }) => {
    const { addQuantity,
        removeQuantity,
        removeFromCart,} = UseCart()
  return (
    <li className="bg-gray-200 p-2 rounded-lg mb-10 h-max">
      <img
        src={item.img}
        alt=""
        className="aspect-video object-cover rounded-lg"
      />

      <strong className="font-mono text-center flex flex-col justify-between mb-4 w-full">
        <div className="text-sm mt-2">{item.title}</div>
        <div>${item.totalPrice}</div>
      </strong>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="border border-gray-600 w-28 flex items-center justify-evenly rounded-md py-1">
          <button
            className="w-full text-xl p-0 bg-transparent text-black"
            onClick={() => {
              removeQuantity(item);
            }}
          >
            -
          </button>
          <p className="font-mono">{item.quantity}</p>
          <button
            className="w-full text-xl p-0 bg-transparent text-black"
            onClick={() => {
              addQuantity(item);
            }}
          >
            +
          </button>
        </div>

        <button
          onClick={() => {
            removeFromCart(item);
          }}
        className="">
          <RiDeleteBin4Line />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
