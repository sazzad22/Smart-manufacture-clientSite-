import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3YyiADIV1q0onsLY4RNaO4lmWSDtv3FjqZzRyJUtSvoQcpnDdA8qD0iQFbwk4Vj5ZxoTr7XTUZNPFGtzY7xYGS00CdnDQO6B"
);

const Payment = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const url = `https://stark-spire-17042.herokuapp.com/order/${id}`;

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const { name, quantity, price,product } = order;
  return (
    <div>
      <h2 className="text-3xl lg:text-5xl font-bold text-accent text-center mb-10">Payment</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mx-5 lg:mx-10">
      <div class="card w-full  bg-base-100 drop-shadow-xl border lg:px-5 ">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {user.displayName}</p>
          <h2 class="card-title">Make payment for <span className="underline text-accent" >{product}</span> </h2>
          <p>
            Your Ordered quantity :{" "}
            <span className="text-orange-700">{quantity}</span>
          </p>
          <p>Please pay: ${price}</p>
        </div>
      </div>
      <div class="card w-full drop-shadow-xl bg-base-100 border lg:px-5">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Payment;
