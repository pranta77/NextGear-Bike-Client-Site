import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

export default function Navigation() {
  const { user, logOut } = useAuth();
  // console.log(user);
  return (
    <div>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/home"}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/morebike">More Bike</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:ml-60 text-red-600">
            NextGear
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ml-96">
          <ul className="menu menu-horizontal px-1">
            <li className="text-white">
              <NavLink to={"/home"}>Home</NavLink>
            </li>

            <li className="text-white">
              <NavLink to={"/morebike"}>More Bike</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user.email ? (
            <>
              <NavLink to={"/dashboard"}>
                <button className="btn">
                  <span className="loading loading-spinner"></span>
                  DashBoard
                </button>
              </NavLink>

              <button onClick={logOut} className="btn btn-outline btn-primary">
                Signout
              </button>
            </>
          ) : (
            <NavLink to={"/signin"}>
              <button className="btn btn-outline btn-primary">SignIn</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
