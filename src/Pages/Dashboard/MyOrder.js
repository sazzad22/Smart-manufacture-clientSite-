import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteOrderModal from "./DeleteOrderModal";

const MyOrder = () => {
  const [deletingOrder, setDeletingOrder] = useState(null);

  const [orders, setOrders] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://stark-spire-17042.herokuapp.com/order?email=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setOrders(data));
    }
  }, [user, orders, navigate]);

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return (
      <div>
        <h2>Error:{error.message}</h2>
      </div>
    );
  }

  return (
    <div class="overflow-x-auto">
      <h2 className="text-3xl lg:text-5xl font-bold text-accent text-center mb-10">Your Orders</h2>
      <table class="table  w-full">
        <thead>
          <tr>
            <th className="bg-secondary"></th>
            <th className="bg-secondary">User</th>
            <th className="bg-secondary">Product</th>
            <th className="bg-secondary">Quantity</th>
            <th className="bg-secondary">Total Price</th>
            <th className="bg-secondary">Address</th>
            <th className="bg-secondary">Payment</th>

            <th className="bg-secondary">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((a, index) => (
            <tr key={a._id}>
              <th>{index + 1}</th>
              <td>{a?.name}</td>
              <td>{a?.product}</td>
              <td>{a?.quantity}</td>
              <td>{a?.price}</td>
              <td>{a?.address}</td>

              {/* Pay or paid */}
              <td>
                {a.price && !a.paid && (
                  <Link to={`/dashboard/payment/${a._id}`}>
                    <button className="btn btn-sm btn-success">pay</button>
                  </Link>
                )}
                {a.price && a.paid && (
                  <div>
                    <p>
                      <span className="text-success border">Paid</span>
                    </p>
                    <p>
                      Transaction id:{" "}
                      <span className="text-success">{a.transactionId}</span>
                    </p>
                  </div>
                )}
              </td>

              <td>
                {a.paid ? (
                  <button className="btn btn-sm" disabled>
                    Delete
                  </button>
                ) : (
                  <label
                    for="delete-order-modal"
                    onClick={() => setDeletingOrder(a)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deletingOrder && (
        <DeleteOrderModal
          deletingDoctor={deletingOrder}
          setDeletingDoctor={setDeletingOrder}
        ></DeleteOrderModal>
      )}
    </div>
  );
};

export default MyOrder;
