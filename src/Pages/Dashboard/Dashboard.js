import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    
    return (
        <div class="drawer drawer-mobile lg:pt-20 pt-20 ">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="lg:text-5xl text-3xl  font-bold text-neutral text-center mt-5">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side mt-10 ml-5">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addreview">Add Reviews</Link>
          </li>
          <li>
            <Link to="/dashboard/myprofile">My Profile</Link>
          </li>
          {/* {admin && (
            <li>
              <Link to="/dashboard/users">All Users</Link>
            </li>
          )} */}
        </ul>
      </div>
    </div>
    );
};

export default Dashboard;