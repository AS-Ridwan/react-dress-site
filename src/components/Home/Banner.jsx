import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../App";

const banner = () => {
  const [inputValue, setInputValue] = useState({
    category: "Dresses",
  });
  const [
    handleAddToCart,
    handleEdit,
    cart,
    shirts,
    setShirts,
    addInputValue,
    editProduct,
    editInputValue,
  ] = useContext(myContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editProduct) {
      editInputValue(inputValue);
    } else {
      addInputValue(inputValue);
    }
  };

  const handleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (editProduct) {
      setInputValue(editProduct);
    }
  }, [editProduct]);

  return (
    <div>
      <h1>this is banner</h1>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col justify-center items-center mt-10"
      >
        <input
          type="text"
          name="title"
          value={inputValue.title}
          onChange={handleInput}
          placeholder="Product Name"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
        <input
          type="text"
          name="url"
          value={inputValue.url}
          onChange={handleInput}
          placeholder="Product URL"
          className="input input-bordered input-secondary w-full max-w-xs my-6"
        />
        <input
          type="text"
          name="price"
          value={inputValue.price}
          onChange={handleInput}
          placeholder="Product Price"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
        <input
          type="submit"
          value={editProduct ? "Edit" : "Submit"}
          className="btn btn-primary mt-5"
        />
      </form>
    </div>
  );
};

export default banner;
