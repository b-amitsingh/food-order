import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals.js";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShowen, setCartIsShowen] = useState(false);

  const closeCartHandler = (event) => {
    setCartIsShowen(false);
  };

  const openCartHandler = (event) => {
    setCartIsShowen(true);
  };

  return (
    <CartProvider>
      {cartIsShowen && <Cart closeCart={closeCartHandler} />}
      <Header openCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
