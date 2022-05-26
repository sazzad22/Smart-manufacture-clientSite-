import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteOrderModal from "./DeleteOrderModal";
import OrderRow from "./OrderRow";

const ManageOrder = () => {
  const [deletingOrder, setDeletingOrder] = useState(null);
  

  const [orders, setOrders] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
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
  }, [user,orders,navigate,]);

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
      <table class="table w-full">
        <thead>
          <tr>
            <th className="bg-secondary" ></th>
            <th className="bg-secondary" >User</th>
            <th className="bg-secondary" >Product</th>
            <th className="bg-secondary" >Quantity</th>
            <th className="bg-secondary" >Address</th>
            <th className="bg-secondary" >Payment</th>
            <th className="bg-secondary" >Status</th>

            <th className="bg-secondary" >Cancel</th>
          </tr>
        </thead>
        <tbody>
        {
          orders.map(order=><OrderRow key={order._id} order={order} setDeletingOrder={setDeletingOrder} ></OrderRow>)
        }
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

export default ManageOrder;
