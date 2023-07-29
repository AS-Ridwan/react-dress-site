import React, { useContext } from "react";
import useTshirts from "../hooks/useTshirts";
import Product from "./Product";
import { myContext } from "../../App";

const Products = () => {
  const [handleAddToCart, cart, shirts] = useContext(myContext);

  return (
    <div className="mt-10">
      <h1>Our Best Products</h1>

      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {shirts?.products?.map((shirt) => (
          <Product key={shirt.id} shirt={shirt}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
