import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

export default function HomeReview() {
  const [reviews, setReviews] = useState({});
  useEffect(() => {
    fetch(`https://next-gear-bike-server.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-black text-slate-200 m-auto text-center mt-10">
        Reviews By Our Happy BikeGears Customers
      </h1>

      <div className="flex flex-wrap justify-center gap-4 my-10">
        {Array.isArray(reviews) &&
          reviews.map((review) => (
            <div key={review._id} className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{review.email}</h2>
                <p>{review.review}</p>
              </div>
              <figure>
                <Rating
                  style={{ maxWidth: 250 }}
                  value={review.rating}
                  readOnly
                />
              </figure>
            </div>
          ))}
      </div>
    </div>
  );
}
