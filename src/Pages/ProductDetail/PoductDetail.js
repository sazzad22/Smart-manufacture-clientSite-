import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const stockRef = useRef("");

  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const url = ` http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventory,id]);

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

  //add to stock
  const handleStock = (event) => {
    event.preventDefault();
    const newStockedItem = parseInt(stockRef.current.value);
    let quantity = inventory.quantity + newStockedItem;
    const updatedInventory = { quantity };
    fetch(`  http://localhost:5000/product/${id}`, {
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
            Seller:{" "}
            <span className="text-gray-800 font-mono font-semibold">
              {inventory.seller}
            </span>{" "}
          </p>
          <p className="text-gray-700 font font-medium">
            Catagory:{" "}
            <span className="text-gray-800 font-mono font-semibold">
              {" "}
              {inventory.catagory}
            </span>
          </p>
          <p className="text-gray-700 font font-medium">
            Available: <span className="text-gray-800">Yes</span>{" "}
          </p>
          <p className="text-gray-700 text-lg my-3 font-medium">
            Quantity:{" "}
            <span className="text-gray-800 font-mono font-semibold underline">
              {" "}
              {inventory.quantity}
            </span>
          </p>
          <button
            className="rounded-lg shadow-md bg-sky-500 px-4 py-3 text-white font-medium hover:shadow-2xl hover:bg-sky-400 my-2"
            onClick={handleReduceQuantity}
          >
            Delivered
          </button>
          <form onSubmit={handleStock}>
            <input
              className="rounded-md "
              type="text"
              name="text"
              placeholder="Add quantity to restock"
              id="quantity"
              ref={stockRef}
            />
            <button className="rounded-lg shadow-md bg-sky-500 px-4 py-3 text-white font-medium hover:shadow-2xl m-7 hover:bg-sky-400">
              Add to Stock
            </button>
          </form>
          <Link
            className="rounded-lg shadow-md bg-sky-500 px-4 py-3 text-white font-medium hover:shadow-2xl m-7 hover:bg-sky-400"
            to={"/manageinventory"}
          >
            Manage Inventories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
