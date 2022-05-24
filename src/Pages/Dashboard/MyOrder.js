import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `http://localhost:5000/order?email=${user.email}`,
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
  }, [user]);
    

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
            <th></th>
            <th>User</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Payment</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((a, index ) => (
            <tr key={a._id}>
              <th>{index + 1}</th>
              <td>{a.name}</td>
              <td>{a.product}</td>
              <td>{a.quantity}</td>
              <td><button className='btn btn-sm'>Pay</button></td>
              <td><button className='btn btn-sm btn-error'>Cancel</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default MyOrder;