import React from "react";
import {  Link, useNavigate } from "react-router-dom";

const Part = ({ product, refetch }) => {
  const { name, price, img, description, minOrder, available, _id } = product;
  const navigate = useNavigate();
  
  return (
    <div class="card w-4/5 lg:my-5 my-5 bg-base-100 shadow-md hover:drop-shadow-2xl ease-in-out duration-300 " title={name}>
      <figure>
              <img
                  className="w-full"
          src={img}
          alt="Computer parts"
        />
      </figure>
      <div class="card-body">
              <h2 class="card-title">{name}</h2>
              <p> <span className="font-semibold text-neutral">Price:</span>${price}</p>
              <p> <span className="font-semibold text-neutral">Description:</span>{description}</p>
              <p> <span className="font-semibold text-neutral">Available:</span>{available}</p>
              <p> <span className="font-semibold text-neutral">Minimum Order:</span>{minOrder}</p>
        <div class="card-actions justify-end">
          
          <Link to={`/product/${_id}`} >Purchase</Link>
        </div>
      </div>
    </div>
  );
};

export default Part;
