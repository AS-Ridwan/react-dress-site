import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { createContext, useState } from "react";
import Cart from "./components/Cart/Cart";

export const myContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (shirtDetails) => {
    const newCart = [...cart, shirtDetails];
    setCart(newCart);
  };
  return (
    <>
      <myContext.Provider value={[handleAddToCart, cart]}>
        <Navbar cart={cart}></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart cart={cart}></Cart>}></Route>
        </Routes>
      </myContext.Provider>
    </>
  );
}

export default App;
