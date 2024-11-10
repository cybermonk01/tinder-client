import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConnectionsList from "../components/ConnectionsList";
import { addConnection } from "../utils/connectionSlice";
import { BASE_URL } from "../utils/constants";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection);

  // console.log("conn", connections);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(
        BASE_URL + "/user/connections",

        {
          withCredentials: true,
        }
      );
      console.log(res?.data, "conn");

      dispatch(addConnection(res?.data?.data));
    } catch (err) {
      console.log(err.message, "error in fetching connections");
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length <= 0)
    return (
      <h1 className="flex justify-center my-10">No Connections founds!</h1>
    );

  return (
    <div>
      <ConnectionsList />
      {/* {connections.map((conn) => {
        const { firstName, lastName } = conn;
        return (
          <div>
            <ul>
              <li>{firstName + " " + lastName}</li>
            </ul>
          </div>
        );
      })} */}
    </div>
  );
};

export default Connections;
