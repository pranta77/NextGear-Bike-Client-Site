import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

export default function SignUp() {
  const [loginUser, setLoginUser] = useState({});

  const navigate = useNavigate();

  const { user, signUpUser, loading, error } = useAuth();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginUser = { ...loginUser };
    newLoginUser[field] = value;
    console.log(newLoginUser);
    setLoginUser(newLoginUser);
  };

  const handleLogin = (e) => {
    if (loginUser.password !== loginUser.password2) {
      alert("your Password did not match");
      return;
    }
    signUpUser(loginUser.email, loginUser.password, navigate);
    e.preventDefault();
  };
  return (
    <div>
      <div className="relative opacity-40 ">
        <img
          src="https://i.ibb.co/8dZYfM4/login-Banner.jpg"
          alt=""
          width={"100%"}
          className="fixed inset-0"
        />
      </div>
      <div className="border p-8 rounded-md bg-teal-950 absolute max-sm:top-80 xl:top-72 max-sm:left-52 max-sm:w-full left-72 transform -translate-x-1/2 -translate-y-1/2 text-orange-300 ">
        <h1 className="text-4xl text-white ml-10  font-extrabold   ">
          Please SignUp
        </h1>
        {!loading && (
          <form onSubmit={handleLogin}>
            <input
              name="name"
              onChange={handleOnChange}
              placeholder="Your Name"
              className="input input-bordered input-info w-full max-w-xs mt-10"
            />{" "}
            <br />
            <input
              type="email"
              name="email"
              onChange={handleOnChange}
              placeholder="Your Email"
              className="input input-bordered input-info w-full max-w-xs mt-10"
            />{" "}
            <br />
            <input
              type="password"
              name="password"
              onChange={handleOnChange}
              placeholder="Password"
              className="input input-bordered input-info w-full max-w-xs mt-4"
            />
            <br />
            <input
              type="password"
              name="password2"
              onChange={handleOnChange}
              placeholder="Re Type Password"
              className="input input-bordered input-info w-full max-w-xs mt-4"
            />
            <button type="submit" className="btn  mt-6 w-full">
              SIGNUP
            </button>
            <br />
            <NavLink to={"/signin"}>
              <button className="btn btn-link">
                REGISTERD USER? PLEASE SIGIN
              </button>
            </NavLink>
          </form>
        )}
        {loading && (
          <span className="loading loading-spinner text-warning"></span>
        )}
        {user?.email && (
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your SignUp has been confirmed!</span>
          </div>
        )}
        {error && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
}
