import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../Shared/Navigation/Navigation";
import useAuth from "../../Hooks/useAuth";

export default function Buying() {
  const { buyid } = useParams();
  const [buy, setBuy] = useState([]);
  const [getbuy, setGetbuy] = useState({});
  const { user } = useAuth();
  // console.log(buy);
  // console.log(user);

  useEffect(() => {
    const url = "http://localhost:5000/products";
    fetch(url)
      .then((res) => res.json())
      // .then((data) => setBuy(data));
      .then((data) => {
        const filteredData = data.filter((buy) => buy.id === buyid);
        setBuy(filteredData);
      });
  }, [buyid]);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrder = { ...getbuy };
    newOrder[field] = value;
    setGetbuy(newOrder);
    // console.log(newOrder);
  };

  const handleBuying = (e) => {
    const buyInfo = {
      ...getbuy,
      email: user.email,
      productname: buy[0]?.BikeName,
      productprice: buy[0]?.Price,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(buyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert(" Successsully Complete Your Order");
          <span className="loading loading-ring loading-lg"></span>;

          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <Navigation />
      <div className="grid md:grid-cols-2">
        <div className="card w-96 bg-base-100 shadow-xl mx-5">
          <div className="card-body">
            <h2 className="card-title">{buy[0]?.BikeName}</h2>
            <p>{buy[0]?.BikeTitle}</p>
            <p>{buy[0]?.Price}</p>
          </div>
          <figure>
            <img src={buy[0]?.img} alt="Shoes" />
          </figure>
        </div>
        <div>
          <h1 className="text-4xl mt-10 ml-6 font-semibold text-white">
            Hello NextGear Lovers Buy Your Bike
          </h1>
          <form onSubmit={handleBuying} className="grid grid-cols-2 gap-4 m-5">
            <input
              type="name"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
              onBlur={handleOnBlur}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
              defaultValue={user.email}
              // disabled
              // onBlur={handleOnBlur}
            />
            <input
              type="name"
              name="productname"
              placeholder="Product Name"
              className="input input-bordered w-full max-w-xs"
              defaultValue={buy[0]?.BikeName}
              // onBlur={handleOnBlur}
            />
            <input
              // type="number"
              name="productprice"
              placeholder="Product price"
              className="input input-bordered w-full max-w-xs"
              defaultValue={buy[0]?.Price}
              // onBlur={handleOnBlur}
            />
            <input
              type="number"
              name="number"
              placeholder="Your Number"
              className="input input-bordered w-full max-w-xs"
              onBlur={handleOnBlur}
            />
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              className="input input-bordered w-full max-w-xs"
              onBlur={handleOnBlur}
            />

            <button type="submit" className="btn btn-active btn-primary ">
              Buy Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
