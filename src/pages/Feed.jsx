import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { BASE_URL } from "../utils/constants";

const Feed = () => {
  const fetchFeed = async () => {
    const res = await axios.post(
      BASE_URL + "/user/feed",
      {},
      {
        withCredentials: true,
      }
    );
    console.log(res);
  };

  useEffect(() => {
    fetchFeed();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="photo-url"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name</h2>
          <p>Choose?</p>
          <div className="card-actions justify-between">
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("ignored", "")}
            >
              Reject
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("interested", "")}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
