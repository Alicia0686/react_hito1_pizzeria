import { useState } from "react";
import { pizzaCart } from "../scripts/pizzas";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const agregarPizzas = (id) => {
    setCart(
      cart.map((pizzaCart) => {
        if (pizzaCart.id === id) {
          let suma = pizzaCart.count + 1;
          return { ...pizzaCart, count: suma };
        }
        return pizzaCart;
      })
    );
  };

  const restarPizzas = (id) => {
    setCart(
      cart.map((pizzaCart) => {
        if (pizzaCart.id === id) {
          let resta = pizzaCart.count - 1;
          return { ...pizzaCart, count: resta };
        }
        return pizzaCart;
      })
    );
  };

  const total = cart.reduce((acumulador, pizzaCart) => {
    return acumulador + pizzaCart.price * pizzaCart.count;
  }, 0);

  return (
    <div className="carro">
      <h3>Detalles del pedido:</h3>;
      <div className="lista">
        <ul>
          {cart.map((pizzaCart) => (
            <li key={pizzaCart.id}>
              <img src={pizzaCart.img} alt="imagen de pizza" />
              <p>{pizzaCart.name}</p>
              <p>{pizzaCart.price}</p>
              <button
                className="buttonResta"
                onClick={() => restarPizzas(pizzaCart.id)}
              >
                -
              </button>
              <p>{pizzaCart.count}</p>
              <button
                className="buttonSuma"
                onClick={() => agregarPizzas(pizzaCart.id)}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
      <h2>Total: ${total}</h2>;<button className="buttonPagar">Pagar</button>
    </div>
  );
};

export default Cart;
