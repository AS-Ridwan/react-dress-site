import React from "react";

const Cart = ({ cart }) => {
  //   const { category, title, price, url, id } = cart;

  return (
    <div>
      <h1>this is cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="card-img">
              <img src={item.url} alt="products" />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="card-title">{item.title}</h2>
              <h5>Category:{item.category}</h5>
              <h5>Price:{item.price}</h5>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
