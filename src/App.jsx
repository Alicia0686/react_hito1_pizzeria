import CartProvider from "./context/CartContext";
import UsersProvider from "./context/UsersContext";
import AppRoutes from "./components/AppRoutes";

const App = () => {
  
  return (
    <UsersProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </UsersProvider>
  );
};

export default App;
