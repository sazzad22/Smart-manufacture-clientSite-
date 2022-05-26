import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const AddReview = () => {
  const [rating, setRating] = useState(10);

  const reviewRef = useRef("");
  const [user] = useAuthState(auth);

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

  const handleAddReview = (e) => {
    const reviewText = reviewRef.current.value;
    const review = {
      client: user?.displayName,
      email: user?.email,
      review: reviewText,
      rating: rating,
    };
    const url = `https://stark-spire-17042.herokuapp.com/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    refetch();
  };
  return (
    <div className="border">
      <div className=" lg:mt-20">
        <h2 className="lg:text-4xl font-semibold text-accent text-center ">
          Leave a Review on our products or company
        </h2>
        <div>
          <p>{reviews.length}</p>
        </div>
        <div className="text-center lg:mt-20">
          <input
            ref={reviewRef}
            name="review"
            type="text"
            placeholder="What's On Your Mind"
            class="input input-success input-bordered input-lg w-full lg:max-w-lg max-w-sm"
          />
          <br />
          <p className="text-accent text-2xl">Give ratings</p>

          <select
            name=""
            id=""
            onChange={(event) => setRating(event.target.value)}
          >
            <option value="1">1</option>
            <option value="2" selected>
              2
            </option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <br />
          <button
            onClick={handleAddReview}
            className="btn my-10  btn-neutral w-full max-w-xs shadow-lg  hover:drop-shadow-xl ease-in "
          >
            Add Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
