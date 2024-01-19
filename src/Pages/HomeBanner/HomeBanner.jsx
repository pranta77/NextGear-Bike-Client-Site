import React from "react";

export default function HomeBanner() {
  return (
    <div>
      <div className="relative">
        <img
          src="https://i.ibb.co/Y0GJcH4/Home-Banner.jpg"
          alt=""
          width={"100%"}
        />
      </div>
      <div className=" absolute max-sm:top-40  md:top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-300 text-center">
        <h1 className="md:text-5xl max-sm:text-2xl font-bold ">
          Biker by heart, rider by soul. <br /> WELLCOME To NextGear
        </h1>
      </div>
    </div>
  );
}
