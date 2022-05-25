import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    
    
    const [client, setClient] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`,
        {
            method: "GET",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
           
          }
        ).then(res => res.json()).then(data => setClient(data))
        console.log(client);

    },[email])


    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = async (data) => {
        
    }
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
              <span className="label-text">Product Image Link</span>
            </label>
            <input
              placeholder="Image Link"
              type="text"
              className="input  input-bordered input-accent  w-full max-w-xs"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image Link is Required",
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
              placeholder="Available Product count"
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

export default MyProfile;