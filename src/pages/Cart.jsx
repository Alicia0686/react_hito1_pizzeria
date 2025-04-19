import { useContext } from "react";
import {CartContext} from "../context/CartContext";
import "./Cart.css";


const Cart = () => {

  const { cart, total, agregarPizzas, restarPizzas } =
    useContext(CartContext);


   return (
    <div className="carro">
      <h3>Detalles del pedido:</h3>
      <div className="lista">
        <ul>
          {cart.map((pizzaCart) => (
            <li key={pizzaCart.id}>
              <img src={pizzaCart.img} alt="imagen de pizza" />
              <p>{pizzaCart.name}</p>
              <p>{pizzaCart.price}</p>
              <button
                className="buttonResta"
                onClick={() => restarPizzas(pizzaCart)}
              >
                -
              </button>
              <p>{pizzaCart.count}</p>
              <button
                className="buttonSuma"
                onClick={() => agregarPizzas(pizzaCart)}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
      <h2>Total: ${total}</h2><button className="buttonPagar">Pagar</button>
    </div>
  );
};

export default Cart;



















