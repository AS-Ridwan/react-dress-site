import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { createContext, useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";

import useTshirts from "./components/hooks/useTshirts";
import ProductDetails from "./components/Products/ProductDetails";
import { addToDb, getStoredCart } from "./components/Utils/Utils";

export const myContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [shirts, setShirts] = useTshirts();
  console.log(shirts);

  useEffect(() => {
    if (shirts?.products?.length) {
      const storedCart = getStoredCart();
      const previousCart = [];
      for (const id in storedCart) {
        const foundProduct = shirts?.products.find((s) => s.id == id);
        if (foundProduct) {
          const quantity = storedCart[id];
          foundProduct.quantity = quantity;
          previousCart.push(foundProduct);
        }
      }
      setCart(previousCart);
    }
  }, [shirts]);

  const handleAddToCart = (shirtDetails) => {
    const newCart = [...cart, shirtDetails];
    addToDb(shirtDetails.id);
    setCart(newCart);
  };
  return (
    <>
      <myContext.Provider value={[handleAddToCart, cart, shirts, setShirts]}>
        <Navbar cart={cart}></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/product/:id"
            element={<ProductDetails></ProductDetails>}
          ></Route>

          <Route path="/cart" element={<Cart cart={cart}></Cart>}></Route>
        </Routes>
      </myContext.Provider>
    </>
  );
}

export default App;
