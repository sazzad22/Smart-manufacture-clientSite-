import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Part = ({ product, refetch,setDeletingProduct}) => {
  const { name, price, img, description, minOrder, available, _id } = product;

    

  return (
    <div
      class="card w-4/5 lg:my-5 my-5 bg-base-100 shadow-md hover:drop-shadow-2xl ease-in-out duration-300 "
      title={name}
    >
      <figure>
        <img className="w-full" src={img} alt="Computer parts" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>
          {" "}
          <span className="font-semibold text-neutral">Price:</span>${price}
        </p>
        <p>
          {" "}
          <span className="font-semibold text-neutral">Description:</span>
          {description}
        </p>
        <p>
          {" "}
          <span className="font-semibold text-neutral">Available:</span>
          {available}
        </p>
        <p>
          {" "}
          <span className="font-semibold text-neutral">Minimum Order:</span>
          {minOrder}
        </p>
        <div class="card-actions justify-end">
          <Link
            className="btn btn-secondary shadow-xl text-blue-900"
            to={`/product/${_id}`}
          >
            Purchase
          </Link>
          <label for="delete-confirm-modal" onClick={() => setDeletingProduct(product)} class="btn  btn-error">
            Delete
          </label>
        </div>
      </div>
    </div>
  );
};

export default Part;
