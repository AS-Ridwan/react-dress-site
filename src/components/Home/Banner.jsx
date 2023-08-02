import React, { useContext, useState } from "react";
import { myContext } from "../../App";

const banner = () => {
  const [inputValue, setInputValue] = useState({
    category: "Dresses",
  });
  const [handleAddToCart, cart, shirts, setShirts, addInputValue] =
    useContext(myContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addInputValue(inputValue);
    e.target.reset();
  };

  const handleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
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
          onChange={handleInput}
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
        <input
          type="text"
          name="url"
          onChange={handleInput}
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs my-6"
        />
        <input
          type="text"
          name="price"
          onChange={handleInput}
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
        <input type="submit" value="Submit" className="btn btn-primary mt-5" />
      </form>
    </div>
  );
};

export default banner;
