import React, { useEffect, useState } from "react";
import MoreBike from "../MoreBike/MoreBike";

export default function MoreBikes() {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl font-black text-slate-200 m-auto text-center mt-10">
        OUR BEST BIKE
      </h1>
      <div className="md:grid md:grid-cols-3 md:mx-4 ">
        {product.map((product) => (
          <MoreBike key={product.id} product={product}></MoreBike>
        ))}
      </div>
    </div>
  );
}
