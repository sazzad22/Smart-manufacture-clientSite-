import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const AddProduct = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();
    
      
    
      
    
      const imageStorageKey = "fc2e062670a7ceea15d576f8c2f69e32";
    
      const onSubmit = async (data) => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.success) {
              const img = result.data.url;
              const product = {
                name: data.name,
                price: data.price,
                description: data.description,
                  img: img,
                  minOrder: data.minOrder,
                  available: data.available,
                
              };
              //todo Send a doctor to db
              fetch("http://localhost:5000/product", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(product),
              })
                .then((res) => res.json())
                  .then((inserted) => {
                    console.log(inserted);
                  if (inserted.insertedId) {
                    toast.success("Product Added successfully");
                    reset();
                  }
                });
            }
          });
      };
    
      
  return (
    <div className="flex  justify-center">
      <div className="w-1/2 my-10 ">
        <h2 className="text-4xl font-semibold text-accent ">Add A Product</h2>
        <form  onSubmit={handleSubmit(onSubmit)}>
          {/*  name input */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              className="input  input-bordered input-accent  w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="text-red-500 label-text-alt">
                  {errors.name?.message}
                </span>
              )}
              
            </label>
          </div>
          {/* Price input */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price per product"
              className="input  input-bordered input-accent  w-full max-w-xs"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
                
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="text-red-500 label-text-alt">
                  {errors.price?.message}
                </span>
              )}
              
            </label>
          </div>
          {/* Description */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="Product description"
              className="input  input-bordered input-accent  w-full max-w-xs"
              {...register("description", {
                required: {
                  value: true,
                  message: "A description is Required",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="text-red-500 label-text-alt">
                  {errors.email?.message}
                </span>
              )}
            </label>
          </div>
          {/* Photo  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>
            <input
              type="file"
              className="input  input-bordered input-accent  w-full max-w-xs"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="text-red-500 label-text-alt">
                  {errors.image?.message}
                </span>
              )}
            </label>
          </div>
          {/* Min order */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Minimum Order</span>
            </label>
            <input
              type="number"
              placeholder="Minimum Order"
              className="input  input-bordered input-accent  w-full max-w-xs"
              {...register("minOrder", {
                required: {
                  value: true,
                  message: "Minimum count is Required",
                },
              })}
            />
            <label className="label">
              {errors.minOrder?.type === "required" && (
                <span className="text-red-500 label-text-alt">
                  {errors.minOrder?.message}
                </span>
              )}
            </label>
          </div>

          {/* available */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Available Products</span>
            </label>
            <input
              type="number"
              placeholder="Price per product"
              className="input  input-bordered input-accent  w-full max-w-xs"
              {...register("available", {
                required: {
                  value: true,
                  message: "available product count is Required",
                },
              })}
            />
            <label className="label">
              {errors.available?.type === "required" && (
                <span className="text-red-500 label-text-alt">
                  {errors.available?.message}
                </span>
              )}
            </label>
          </div>

          {/* Add Button */}
          <input
            className="btn btn-outline btn-primary w-full max-w-xs shadow-lg  hover:drop-shadow-xl ease-in"
            value="Add Product"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
