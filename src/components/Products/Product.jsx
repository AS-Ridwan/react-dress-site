import React, { useContext } from "react";
import { myContext } from "../../App";

const Product = ({ shirt }) => {
  const { category, title, price, url, id } = shirt;
  const [handleAddToCart] = useContext(myContext);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{category}</p>
        <p>{price}</p>
        <div className="card-actions justify-between">
          <button className="btn btn-neutral">Show Details</button>
          <button
            onClick={() => handleAddToCart(shirt)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
