import React from "react";
import { Link } from "react-router-dom";

export default function BottomBanner() {
  return (
    <div>
      <div className="relative">
        <img
          width={"100%"}
          src="https://i.ibb.co/rvQdwHL/down-Banner.jpg"
          alt=""
        />
      </div>
      <div className=" md:-mt-60 max-sm:-mt-10 absolute max-sm:right-5  md:-right-10 transform md:-translate-x-1/2 -translate-y-1/2  text-center">
        <h1 className="md:text-5xl text-red-600 font-bold">
          Bikers gonna bike.
        </h1>
        <p className="md:text-2xl text-rose-500 font-bold">
          “Although motorcycle riding is romantic{" "}
        </p>
        <p className="md:text-2xl  text-white font-bold">
          motorcycle maintenance is purely classic.”
        </p>
        <Link to="/morebike">
          <button className="btn btn-warning">Click Me</button>
        </Link>
      </div>
    </div>
  );
}
