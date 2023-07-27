// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const useTshirts = () => {
  const [shirts, setShirts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setShirts(data));
  }, []);
  return [shirts, setShirts];
};

export default useTshirts;
