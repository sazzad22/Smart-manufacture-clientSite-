import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();
  const stockRef = useRef("");
  const phoneRef = useRef("");
  const addressRef = useRef("");
  const [user] = useAuthState(auth);

  const [inventory, setInventory] = useState({});
  const [legits, setLegits] = useState(true);

  useEffect(() => {
    const url = ` https://stark-spire-17042.herokuapp.com/product/${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventory, id]);

  // const handleReduceQuantity = () => {
  //   let quantity = inventory.quantity;
  //   quantity -= 1;

  //   const updatedInventory = { quantity };
  //   const url = `  https://stark-spire-17042.herokuapp.com/product/${id}`;
  //   fetch(url, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(updatedInventory),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("success", data);
  //     });
  // };
  let quantityError;

  const handleInput = (e) => {
    const quantity = parseInt(stockRef.current.value);
    const phone = parseInt(phoneRef.current.value);

    const legit =
      quantity > inventory.minOrder && quantity < inventory.available;
    setLegits(legit);
  };
  if (!legits) {
    quantityError = (
      <p className="text-red-500">
        "Add within available and minimum order quantity"
      </p>
    );
  }

  //add to Order
  const handleOrder = (event) => {
    event.preventDefault();
    const quantity = parseInt(stockRef.current.value);
    const phone = parseInt(phoneRef.current.value);
    const address = addressRef.current.value;
    const price = parseInt(inventory.price);
    const totalPrice = quantity * price;

    const order = {
      name: user?.displayName,
      email: user?.email,
      phone: phone,
      product: inventory.name,
      price: totalPrice,
      quantity: quantity,
      address: address,
    };
    console.log(price, totalPrice, order);

    fetch(`  https://stark-spire-17042.herokuapp.com/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("order", data);
        toast.success("Order Booked");
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

          {/* Order Input */}
          <form onChange={handleInput}>
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

            {/* quantity */}
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

            {/* Address */}
            <label class="label">
              <span class="label-text">Address:</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs "
              type="text"
              name="text"
              placeholder="Address "
              id="address"
              ref={addressRef}
            />

            {/* button */}

            {quantityError}
            {legits ? (
              <input
                type="submit"
                value="Place Order"
                className="btn btn-primary my-5 w-full max-w-xs"
                onClick={handleOrder}
              />
            ) : (
              <input
                type="submit"
                value="Place Order"
                className="btn btn-primary my-5 w-full max-w-xs"
                disabled
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
