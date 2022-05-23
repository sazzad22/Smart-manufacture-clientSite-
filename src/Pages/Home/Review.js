import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-md bg-base-100 shadow-xl     hover:scale-105 hover:transition-transform    duration-200 ease-in ">
      <div className="card-body">
        <p>
          If a dog chews shoes whose shoes does he choose? If a dog chews shoes
          whose shoes does he choose?
        </p>
        <div className=" flex items-center ">
          <div className="avatar pt-1 mt-1 ">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100  mr-5 ">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold">{review.name}</h4>

            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;