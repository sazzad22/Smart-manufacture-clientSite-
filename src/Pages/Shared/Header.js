import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import {useAuthState} from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
    const handleSignOut = () => {
        signOut(auth);
    }
    const menuItem = (
        <>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          
          <li>
            <Link to={"dashboard"}>Dashboard</Link>
          </li>
          
          <li>
            <Link to={"blogs"}>Blogs</Link>
          </li>
          
          <li>
            {user ? (
              <button className="btn btn-ghost" onClick={handleSignOut}>
                Sign Out
              </button>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </li>
        </>
      );
    return (
        <div>
      <div className="navbar  fixed  bg-gradient-to-r from-primary via-secondary  ease-in-out duration-200   z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link to={"/home"} className="font-semibold px-5 lg:px-10 normal-case text-2xl lg:text-4xl text-white">
            Smart Manufacture
          </Link>
        </div>
        <div className="navbar hidden lg:flex justify-end">
          <ul className="menu  menu-horizontal p-0">{menuItem}</ul>
          {user && (
            <span
              className=" border-2 px-2 rounded-3xl  font-semibold text-accent hover:text-primary ease-in duration-200 cursor-pointer
           shadow-sm"
            >
              {user?.displayName}
            </span>
          )}
        </div>
        <div className="navbar-end lg:hidden">
        <label tabIndex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="blue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
        
        </div>
      </div>
    </div>
    );
};

export default Header;