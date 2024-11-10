import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import UserCard from "../components/UserCard";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();

  // const handleSendRequest = () => {};
  const fetchFeed = async () => {
    // if (feed) return;
    const res = await axios.post(
      BASE_URL + "/user/feed",
      {},
      {
        withCredentials: true,
      }
    );
    console.log(res);
    dispatch(addFeed(res?.data?.data));
  };
  const feed = useSelector((store) => store.feed);

  useEffect(() => {
    fetchFeed();
  }, []);

  if (!feed) return;

  if (feed.length <= 0)
    return <h1 className="flex justify-center my-10">No new users founds!</h1>;
  return (
    <div className="flex justify-center">
      <UserCard feed={feed[0]} />
    </div>
  );
};

export default Feed;
