import React from "react";
import user from '../../images/user.png';

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-md bg-base-100 shadow-xl     hover:scale-105 hover:transition-transform    duration-200 ease-in ">
      <div className="card-body">
        <p>{review.review}
        </p>
        <div className=" flex items-center ">
          <div className="avatar pt-1 mt-1 ">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100  mr-5 ">
              <img src={user} alt="" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold">{review.client}</h4>
            <h4 className="font-semibold">Rating:{review.rating}</h4>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;