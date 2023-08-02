import React, { useEffect, useState } from "react";

const useTshirts = () => {
  const [shirts, setShirts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setShirts(data.products));
  }, []);
  return [shirts, setShirts];
};

export default useTshirts;
