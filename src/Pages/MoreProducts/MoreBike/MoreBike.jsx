import React from "react";
import { Link } from "react-router-dom";

export default function MoreBike(props) {
  const { id, img, Price, BikeName, BikeTitle } = props.product;
  return (
    <div>
      <div className="mx-auto my-4 card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{BikeName}</h2>
          <p>{BikeTitle}</p>
          <h3>{Price}</h3>
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
