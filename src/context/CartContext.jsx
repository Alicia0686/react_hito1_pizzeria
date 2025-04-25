import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("quiero ver lo que cart en el contexto", cart);
  }, [cart]);

  // Agregando una nueva pizza al carrito
  const agregarPizzas = (pizza) => {
    const pi = cart.find((e) => e.id === pizza.id);

    if (pi) {
      setCart(
        cart.map((pizzaCart) => {
          if (pizzaCart.id === pizza.id) {
            let suma = pizzaCart.count + 1;
            return { ...pizzaCart, count: suma };
          }
          return pizzaCart;
        })
      );
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const restarPizzas = (pizza) => {
    setCart(
      cart
        .map((pizzaCart) => {
          if (pizzaCart.id === pizza.id) {
            let resta = pizzaCart.count - 1;
            return { ...pizzaCart, count: resta };
          }
          return pizzaCart;
        })
        .filter((pizzaCart) => pizzaCart.count > 0)
    );
  };

  const total = cart.reduce((acumulador, pizzaCart) => {
    return acumulador + pizzaCart.price * pizzaCart.count;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        total,
        agregarPizzas,
        restarPizzas,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;

