import React from "react";

function Reviews() {
  const reviews = [
    {
      name: "Maria Santos",
      rating: "★★★★★",
      comment: "The best caramel latte in town! Cozy atmosphere and super friendly staff.",
    },
    {
      name: "John Rivera",
      rating: "★★★★☆",
      comment: "Great coffee and pastries! The place can get a bit crowded during weekends though.",
    },
    {
      name: "Ella Cruz",
      rating: "★★★★★",
      comment: "Absolutely love the cold brew — strong, smooth, and refreshing!",
    },
  ];

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">Customer Reviews</h2>
      <div className="row justify-content-center">
        {reviews.map((review, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card p-3 shadow-sm border-0 bg-light">
              <h5 className="fw-bold">{review.name}</h5>
              <p className="text-warning fs-5">{review.rating}</p>
              <p className="fst-italic">“{review.comment}”</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
