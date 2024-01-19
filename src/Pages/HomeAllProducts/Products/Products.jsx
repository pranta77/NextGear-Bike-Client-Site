import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl font-black text-slate-200 m-auto text-center mt-10">
        OUR MONOPOLISTIC BEST BIKE
      </h1>
      <div className="md:grid md:grid-cols-2 md:p-10">
        {products &&
          products
            .slice(0, 6)
            .map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
      </div>
    </div>
  );
}
