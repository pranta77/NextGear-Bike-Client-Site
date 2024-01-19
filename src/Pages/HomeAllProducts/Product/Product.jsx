import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  const { id } = product;
  // const { id, BikeName, BikeTitle, img, Price } = product;

  return (
    <div>
      <div className="mx-auto my-4 card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={product?.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.BikeName}</h2>
          <p>{product?.BikeTitle}</p>
          <h3>{product?.Price}</h3>
          <div className="card-actions justify-end">
            <Link to={`/buying/${id}`}>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
