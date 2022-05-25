import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [updated,setUpdated]=useState(false)
  const [user] = useAuthState(auth);
  const email = user.email;

  const [client, setClient] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setClient(data));
    
  }, [email,updated,client]);

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
    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updatedClient),
    })
    .then(res => res.json())
        .then(data => {
        console.log(data);
            if (data.result.modifiedCount > 0) {
            setUpdated(true)
            
                toast.success(`Successfully updated profile`);
                
        }

    });
  };
  return (
    <div className="flex  justify-center">
      <div className="w-1/2 my-10 ">
        <h2 className="text-4xl font-semibold text-accent ">
          User Information
        </h2>
        <p>Name:{client.name}</p>
        <p>Email:{client.email}</p>
              {
                  updated ? <>
                      <p>Name:{client.education}</p>
        <p>Email:{client.location}</p>
        <p>Email:{client.phone}</p>
        <p>Email:{client.profileLink}</p>
                  </> :<></>
        }
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*  Education input */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Education</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
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
            className="btn btn-outline btn-primary w-full max-w-xs shadow-lg  hover:drop-shadow-xl ease-in"
            value="Submit"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
