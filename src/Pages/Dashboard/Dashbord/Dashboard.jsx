import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

export default function Dashboard() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-gray-950">
        <ul className="p-5 text-2xl mt-24">
          <li className="text-white font-semibold ">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li className="text-white font-semibold  mt-3">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="text-white font-semibold  mt-3">
            <NavLink to="/dashboard/itemorder">Your Orders</NavLink>
          </li>
          <li className="text-white font-semibold  mt-3">
            <NavLink to="/dashboard/payment"> Payment</NavLink>
          </li>
          <li className="text-white font-semibold  mt-3">
            <NavLink to="/dashboard/review"> Review</NavLink>
          </li>
          <li className="mt-3">
            <button onClick={logOut} className="btn btn-error">
              Signout
            </button>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
