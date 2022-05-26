import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [client, setClient] = useState({});
  const [updated, setUpdated] = useState(false);
  const [user] = useAuthState(auth);
  const email = user.email;

  useEffect(() => {
    fetch(`https://stark-spire-17042.herokuapp.com/user/${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setClient(data));
  }, [email, updated, client]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const updatedClient = {
      education: data.education,
      location: data.location,
      phone: data.phone,
      profileLink: data.profileLink,
    };
    console.log(updatedClient);
    //todo Update user profile
    fetch(`https://stark-spire-17042.herokuapp.com/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updatedClient),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.result.modifiedCount > 0) {
          setUpdated(true);

          toast.success(`Successfully updated profile`);
        }
      });
  };
  return (
    <div className="flex  justify-center lg:px-1 px-10 ">
      <div className="w-full mb-20 lg:flex justify-center   ">
        <div>
          <h2 className="text-4xl font-semibold text-accent my-5 ">
            User Information
          </h2>
          <p className="text-lg ">
            Name:{" "}
            <span className="font-mono text-accent hover:underline text-xl">
              {user.displayName}
            </span>
          </p>
          <p className="text-lg ">
            Email:{" "}
            <span className="font-mono text-accent hover:underline text-xl">
              {client.email}
            </span>
          </p>

          <p className="text-lg ">
            Education:{" "}
            <span className="font-mono text-accent hover:underline text-xl">
              {client.education}
            </span>
          </p>
          <p className="text-lg ">
            Location:{" "}
            <span className="font-mono text-accent hover:underline text-xl">
              {client.location}
            </span>
          </p>
          <p className="text-lg ">
            Phone:{" "}
            <span className="font-mono text-accent hover:underline text-xl">
              {client.phone}
            </span>
          </p>
          <p className="text-lg ">
            LinkedIn Link:{" "}
            <span className="font-mono text-accent hover:underline text-xl">
              {client.profileLink}
            </span>
          </p>
        </div>
        <form
          className="text-center lg:ml-20 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl font-semibold text-accent my-5 ">Update</h2>
          {/*  Education input */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Education</span>
            </label>
            <input
              type="text"
              placeholder="Education"
              className="input  input-bordered input-accent  w-full max-w-xs"
              {...register("education")}
            />
          </div>
          {/*  Loacation input */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              placeholder="Your Address"
              className="input  input-bordered input-accent  w-full max-w-xs"
              {...register("location")}
            />
          </div>
          {/*  phone input */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              className="input  input-bordered input-accent  w-full max-w-xs"
              {...register("phone")}
            />
          </div>
          {/*  Linkin profile input */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">LinkedIn profile Link</span>
            </label>
            <input
              type="text"
              placeholder="LinkedIn profile Ling"
              className="input  input-bordered input-accent  w-full max-w-xs"
              {...register("profileLink")}
            />
          </div>

          {/* Add Button */}
          <input
            className="btn  btn-primary w-full max-w-xs shadow-lg  hover:drop-shadow-xl ease-in my-5"
            value="Submit"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
