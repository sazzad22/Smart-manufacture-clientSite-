import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Product from "./Product";
import bg from "../../images/background.jpg";
import DeleteConfirmModal from "./DeleteConfirmModal";

const ManageProduct = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("available", () =>
    fetch("https://stark-spire-17042.herokuapp.com/product").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const reversedProducts = [...products].reverse();

  return (
    <div
      id="computerparts"
      className="mb-20"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover",
        backgroundBlendMode: "lighten",
      }}
    >
      <h2 className="text-4xl lg:text-6xl text-center mt-20 font-extrabold ">
        <span className="text-secondary hover:text-primary duration-200">
          All Products
        </span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-1 justify-items-center my-20">
        {reversedProducts.map((product) => (
          <Product
            key={product._id}
            product={product}
            setDeletingProduct={setDeletingProduct}
          ></Product>
        ))}
        {deletingProduct && (
          <DeleteConfirmModal
            deletingProduct={deletingProduct}
            refetch={refetch}
            setDeletingProduct={setDeletingProduct}
          ></DeleteConfirmModal>
        )}
      </div>
    </div>
  );
};

export default ManageProduct;
