import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";

const Connections = () => {
  const fetchConnections = async () => {
    const res = await axios.get(BASE_URL + "/connections", {
      withCredentials: true,
    });
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return <div>Connections</div>;
};

export default Connections;
