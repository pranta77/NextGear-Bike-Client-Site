import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import useAuth from "../../../Hooks/useAuth";

export default function Review() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const { user } = useAuth();

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleOnChange = (e) => {
    // const field = e.target.name;
    const value = e.target.value;
    // const newReview = { ...review };
    // newReview[field] = value;
    // setReview(newReview);
    // console.log(newReview);
    setReview(value);
  };
  // console.log(review);

  const handleOnSubmit = (e) => {
    const reviews = {
      review: review,
      rating: rating,
      email: user.email,
    };

    fetch(`https://next-gear-bike-server.vercel.app/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Thanks For You Kindness Stay With Our BikeGears");
        }
        e.target.reset();
      });
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold text-red-600 text-center my-8">
        Please Review Our Next Gears
      </h1>
      <div className="flex justify-center">
        <div className="text-center w-96  py-10">
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              defaultValue={user.email}
              disabled
            />
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-sm w-full max-w-xs mt-5"
              name="review"
              type="text"
              onChange={handleOnChange}
            ></textarea>
            <br />
            <div className="flex justify-center my-4">
              <Rating
                style={{ maxWidth: 250 }}
                value={rating}
                onChange={setRating}
              />
            </div>
            <button className="btn btn-primary w-80">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
