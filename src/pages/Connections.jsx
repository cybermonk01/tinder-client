import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";

const Connections = () => {
  const fetchConnections = async () => {
    const res = await axios.get(
      BASE_URL + "/user/connections",

      {
        withCredentials: true,
      }
    );
    console.log(res, "conn");
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return <div>Connections</div>;
};

export default Connections;
