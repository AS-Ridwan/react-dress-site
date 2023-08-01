import React from "react";

const Banner = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited", e.target.text.value);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center my-16"
      >
        <input
          type="text"
          name="text"
          placeholder="Type here"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <input
          type="text"
          name="text"
          placeholder="Type here"
          className="input input-bordered input-warning w-full max-w-xs my-5"
        />
        <input
          type="text"
          name="text"
          placeholder="Type here"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <input type="submit" value="SUBMIT" className="btn btn-primary mt-5 " />
      </form>
    </div>
  );
};

export default Banner;
