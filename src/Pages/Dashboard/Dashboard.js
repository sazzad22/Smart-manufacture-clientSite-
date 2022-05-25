import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(admin);

  return (
    <div class="drawer drawer-mobile lg:pt-20 pt-20 ">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="lg:text-5xl text-3xl  font-bold text-neutral text-center mt-5">
          Welcome to your Dashboard
        </h2>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <div class="drawer-side lg:mt-10 lg:ml-5">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {
            admin.admin ? <></> :
              <>
                <li>
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addreview">Add Reviews</Link>
          </li>
            </>
          }
          <li>
            <Link to="/dashboard/myprofile">My Profile</Link>
          </li>

          {admin.admin && (
            <>
            <li>
              <Link to="/dashboard/users">Make Admin</Link>
            </li>
            <li>
              <Link to="/dashboard/addproduct">Add Product</Link>
            </li>
            <li>
              <Link to="/dashboard/manageproduct">Manage Products</Link>
            </li>
            <li>
              <Link to="/dashboard/manageorder">Manage Order</Link>
            </li></>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
