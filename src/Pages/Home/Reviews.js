import React from "react";
import Review from "./Review";
import people1 from "../../images/user.png";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";

const Reviews = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery(["reviews"], () =>
    fetch("https://stark-spire-17042.herokuapp.com/review").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section id="review" className="my-40 ">
      <div className="flex justify-center">
        <div>
          <h4 className="text-xl lg:text-4xl text-primary font-bold text-center">
            Client Reviews
          </h4>
          <h2 className="text-3xl">Comments From our customers</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-10 lg:px-10  ">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
