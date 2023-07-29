import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { myContext } from "../../App";

const ProductDetails = () => {
  const { id } = useParams();
  const [handleAddToCart, cart, shirts, setShirts] = useContext(myContext);
  const item = shirts?.products.find((s) => s.id == id);
  return (
    <div>
      <h1>This is product details page</h1>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={item.url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.category}</p>
          <p>{item.price}</p>
          <div className="card-actions justify-between"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
