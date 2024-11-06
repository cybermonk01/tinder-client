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
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={feed?.photoUrl} alt="photo-url" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{feed?.firstName}</h2>
          <p>
            <span>{feed?.age} </span>| {feed?.about}
          </p>
          <div className="card-actions justify-between">
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("ignored", feed?._id)}
            >
              Reject
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("interested", feed?._id)}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
