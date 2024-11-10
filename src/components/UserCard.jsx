import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ feed }) => {
  // const feed = useSelector((store) => store.feed);

  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    const res = await axios.post(
      BASE_URL + "/request/send/" + status + "/" + userId,
      {},
      { withCredentials: true }
    );
    console.log("res", res);
    dispatch(removeUserFromFeed(userId));
  };

  return (
    <div className="">
      <div className="card card-compact bg-gray-900 w-80 my-10 shadow-xl">
        <figure>
          <img src={feed?.photoUrl} alt="photo-url" className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {feed?.firstName + " " + feed?.lastName}
          </h2>
          <p>
            <span>{feed?.age} </span>| {feed?.about}
          </p>
          <div className="card-actions justify-between">
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("ignored", feed?._id)}
            >
              Not Interested
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("interested", feed?._id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
