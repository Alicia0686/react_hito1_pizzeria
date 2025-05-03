import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UsersContext } from "../context/UsersContext";
import "./Cart.css";

const Cart = () => {
  const { cart, total, agregarPizzas, restarPizzas } = useContext(CartContext);
  const { token } = useContext(UsersContext);
  const [mensaje, setMensaje] = useState("");
  const [checkoutExitoso, setCheckoutExitoso] = useState(null);

  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Error desconocido en el servidor");
      }

      setMensaje("¡Compra realizada con éxito!");
      setCheckoutExitoso(true);
    } catch (error) {
      console.error("Error en checkout:", error.message);
      setMensaje("Error al procesar la compra: " + error.message);
      setCheckoutExitoso(false);
    }
  };

  return (
    <div className="carro">
      <h3>Detalles del pedido:</h3>
      <div className="lista">
        <ul>
          {cart.map((pizzaCart) => (
            <li key={pizzaCart.id}>
              <div className="bloque1">
                <img src={pizzaCart.img} alt="imagen de pizza" />
                <p>{pizzaCart.name}</p>
              </div>
              <div className="bloque2">
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
              </div>
            </li>
          ))}
        </ul>
      </div>
      <h2>Total: ${total}</h2>
      <button
        disabled={token ? false : true}
        className="buttonPagar"
        onClick={handleCheckout}
      >
        Pagar
      </button>

      {checkoutExitoso !== null && (
        <div
          className={`alert d-flex align-items-center ${
            checkoutExitoso ? "alert-success" : "alert-danger"
          }`}
          role="alert"
        >
          <i
            className={`bi me-2 ${
              checkoutExitoso ? "bi-check-circle-fill" : "bi-x-circle-fill"
            }`}
          ></i>
          {mensaje}
        </div>
      )}
    </div>
  );
};

export default Cart;
