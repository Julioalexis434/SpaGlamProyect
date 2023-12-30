import React, {useState} from "react";
import { RiCloseLine, RiShoppingCart2Line } from "react-icons/ri";
import { UseCart } from "../../Hooks/UseCart";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { useAuth0 } from "@auth0/auth0-react";
import AlertLogin from "../../Auth/AlertLogin";

const Cart = () => {
  const [Alert, setAlert] = useState(false)
  const {
    handleToggleTrue,
    handleToggleFalse,
    toggleCart,
    setToggleCart,
    cart,
  } = UseCart();

  if (cart.length === 0) {
    setToggleCart(false);
  }
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <div
        onClick={() => {
          handleToggleTrue();
        }}
        className="text-xl cursor-pointer relative"
      >
        <RiShoppingCart2Line />

        <span
          className={`absolute -top-5 -right-5 ${
            cart.length === 0 ? "hidden" : "flex"
          } px-3 py-1 text-white text-sm bg-red-500 flex items-start justify-center rounded-full`}
        >
          {cart.length}
        </span>
      </div>

      <aside
        className={`fixed top-0  bg-white w-full lg:w-[20vw] h-screen transition-all p-4 pt-20 ${
          toggleCart ? " right-0" : "-right-[100%]"
        }`}
      >
        {cart.length === 0 && "no hay productos en el carrito"}

        <div
          onClick={() => {
            handleToggleFalse();
          }}
          className="text-xl p-2 bg-primary-100 inline-block rounded-full absolute top-4 left-4 cursor-pointer"
        >
          <RiCloseLine />
        </div>

        <ul className="max-w-[90%] mx-auto h-[80%] overflow-y-auto">
          {cart.map((item) => {
            return <CartItem item={item} key={item.title} />;
          })}
        </ul>
        <div className="flex justify-between items-center gap-x-6 py-4 px-2">
          <strong className="font-mono text-start flex flex-col justify-between mb-4 w-full">
            <div className="text-sm mt-2">Total</div>
            <div>${cart.reduce((a, b) => a + b.totalPrice, 0)}</div>
          </strong>

            <button className={`${cart.length === 0 ? "hidden" : "flex"}`} onClick={()=>{
              if(isAuthenticated){
                navigate("/comprar")
                setToggleCart(false)
              }else{
                return(
                  setAlert(true)
                )
              }
            }}>COMPRAR</button>
          
          {Alert && (<AlertLogin/>)}
        </div>
      </aside>
    </>
  );
};

export default Cart;
