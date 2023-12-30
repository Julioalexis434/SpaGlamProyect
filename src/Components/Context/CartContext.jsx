import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [toggleCart, setToggleCart] = useState(false);

  const addCart = (product) => {
    const findIndex = cart.findIndex((item) => item.id === product.id);

    if (findIndex >= 0) {
      let newCart = structuredClone(cart);
      return setCart(newCart);
    }

    //si el producto no esta en el carrito
    setCart((prevState) => [
      ...prevState,
      { ...product, quantity: 1, totalPrice: product.price },
    ]);
  };

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  };

  const addQuantity = (product) => {
    const findIndex = cart.findIndex((item) => item.id === product.id);

    if (findIndex >= 0) {
      const newCart = structuredClone(cart);
      const CartIndex = newCart[findIndex];
      if (CartIndex.quantity > 0 && CartIndex.quantity < 5) {
        CartIndex.quantity += 1;
        CartIndex.totalPrice = CartIndex.quantity * CartIndex.price;
      }

      return setCart(newCart);
    }
  };

  const removeQuantity = (product) => {
    const findIndex = cart.findIndex((item) => item.id === product.id);

    if (findIndex >= 0) {
      let newCart = structuredClone(cart);
      const CartIndex = newCart[findIndex];
      if (CartIndex.quantity === 1) {
        CartIndex.quantity = 1;
      } else {
        newCart[findIndex].quantity--;
        CartIndex.totalPrice = CartIndex.quantity * CartIndex.price
      }
      return setCart(newCart);
    }
  };

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const handleToggleTrue = () => {
    if (cart.length > 0) {
      setToggleCart(true);
    } else {
      setToggleCart(false);
    }
  };
  const handleToggleFalse = () => {
    setToggleCart(false);
  };

  return (
    <CartContext.Provider
      value={{
        addCart,
        addQuantity,
        removeFromCart,
        removeQuantity,
        toggleCart,
        setToggleCart,
        handleToggleTrue,
        handleToggleFalse,
        checkProductInCart,
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
