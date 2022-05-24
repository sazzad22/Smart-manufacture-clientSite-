import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const ProductDetail = () => {
  const { id } = useParams();
  const stockRef = useRef("");
  const phoneRef=useRef('')
  const [user] = useAuthState(auth);

  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const url = ` http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventory, id]);

  const handleReduceQuantity = () => {
    let quantity = inventory.quantity;
    quantity -= 1;

    const updatedInventory = { quantity };
    const url = `  http://localhost:5000/product/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInventory),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      });
  };

  //add to Order
  const handleOrder = (event) => {
    event.preventDefault();
    const quantity = parseInt(stockRef.current.value);
    const phone = parseInt(phoneRef.current.value);

    const order = {
      name: user?.displayName,
      email: user?.email,
      phone: phone,
      product: inventory.name,
      quantity: quantity,

    }
    console.log(order);
    
    fetch(`  http://localhost:5000/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("order", data);
      });
    event.target.reset();
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 px-5 md:px-10 lg:px-32 py-32 rounded-md shadow-2xl">
        <div className="w-90 p-10 md:p-4 sm:p-2 rounded-md">
          <img className="rounded-md" src={inventory.img} alt="" />
        </div>
        <div className="w-90 p-10 text-left">
          <h3 className="font-bold text-4xl  lg:text-5xl text-gray-700 mb-2 ">
            {inventory.name}
          </h3>
          <p className="text-gray-700 font font-medium">
            Description:{" "}
            <span className="text-gray-800 font-mono font-semibold">
              {inventory.shortDescription}
            </span>{" "}
          </p>
          <p className="text-gray-700 font font-medium">
            Price: ${" "}
            <span className="text-gray-800 font-mono font-semibold">
              {inventory.price}
            </span>{" "}
          </p>

          <p className="text-gray-700 font font-medium">
            Description:{" "}
            <span className="text-gray-800 font-mono font-semibold">
              {inventory.description}
            </span>{" "}
          </p>

          <p className="text-gray-700 font font-medium">
            Available: <span className="text-gray-800">Yes</span>{" "}
          </p>
          <p className="text-gray-700 text-lg my-3 font-medium">
            Minimum Order:{" "}
            <span className="text-gray-800 font-mono font-semibold underline">
              {" "}
              {inventory.minOrder}
            </span>
          </p>
          <p className="text-gray-700 text-lg my-3 font-medium">
            Available quantity:{" "}
            <span className="text-gray-800 font-mono font-semibold underline">
              {" "}
              {inventory.available}
            </span>
          </p>
          <button
            className="rounded-lg shadow-md bg-sky-500 px-4 py-3 text-white font-medium hover:shadow-2xl hover:bg-sky-400 my-2"
            onClick={handleReduceQuantity}
          >
            Delivered
          </button>
          {/* Order Input */}
          <form onSubmit={handleOrder}>
            {/* Name */}
            <label class="label">
              <span class="label-text">Name:</span>
              
            </label>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            {/* Email */}
            <label class="label">
              <span class="label-text">Email:</span>
              
            </label>
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            {/* phone */}
            <label class="label">
              <span class="label-text">Phone:</span>
              
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
              ref={phoneRef}
            />
            <label class="label">
              <span class="label-text">Quantity:</span>
              
            </label>
            <input
              className="input input-bordered w-full max-w-xs "
              type="text"
              name="text"
              placeholder="Add quantity "
              id="quantity"
              ref={stockRef}
            />
            {/* button */}
            <input
              type="submit"
              value="Place Order"
              className="btn btn-primary my-5 w-full max-w-xs"
            />
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
