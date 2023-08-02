import React, { useContext } from "react";
import { myContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Product = ({ shirt }) => {
  const { category, title, price, url, id } = shirt;
  // console.log(shirts);
  const [handleAddToCart, handleEdit, cart, shirts, setShirts, addInputValue] =
    useContext(myContext);

  const navigate = useNavigate();

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
          <button
            onClick={() => navigate(`/product/${id}`)}
            className="btn btn-neutral"
          >
            Show Details
          </button>
          <button
            onClick={() => handleAddToCart(shirt)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
          <button onClick={() => handleEdit(id)} className="btn btn-primary">
            EDIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
