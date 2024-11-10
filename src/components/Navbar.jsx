import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        BASE_URL + "/auth/logout",
        {},
        { withCredentials: true }
      );
      dispatch(removeUser());
      // alert("Logout success!", res);
      // setTimeout(() => {
      //   setShowToast(res);
      // }, 1000);
      // Optionally navigate to login
      navigate("/login");
      setShowToast(true);
    } catch (error) {
      console.error("Logout failed:", error.message);
      alert("Logout failed. Please try again.");
    }

    // navigate("/login");
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowToast(true);
  //   }, 1000);
  //   setShowToast(false);
  //   return () => {
  //     clearTimeout();
  //   };
  // }, [showToast]);

  return (
    <header className="text-gray-400 bg-gray-900 body-font flex">
      {showToast && (
        <div className="toast">
          <div className="alert alert-info">
            <span>{showToast}</span>
          </div>
        </div>
      )}
      <div className="flex-1 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
          <img
            src="https://logodownload.org/wp-content/uploads/2020/09/tinder-logo-1.png"
            alt="logo"
            className="w-48"
          />
          <span className="ml-3 text-xl"></span>
        </a>
      </div>
      <div className="flex gap-2 justify-center mx-3 my-4">
        <div className="form-control mx-9">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end mx-4  flex">
          {user && (
            <h1 className="text-lg bold-xl mt-3 mx-2 text-yellow-500">
              {user.firstName + " " + user.lastName}
            </h1>
          )}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/connections" className="justify-between">
                Connections
                <span className="badge">New</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/feed">Feed</NavLink>
            </li>
            <li>
              <NavLink to="/edit">Edit</NavLink>
            </li>
            <li>
              <NavLink to="/requests">Requests </NavLink>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
