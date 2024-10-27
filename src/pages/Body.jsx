import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Body = () => {
  useEffect(() => {
    const getCookie = (name) => {
      console.log("document.cookie", document.cookie);
      // const value = `; ${document.cookie}`;
      // const parts = value.split(`; ${name}=`);
      // if (parts.length === 2) return parts.pop().split(";").shift();
    };

    // Usage
    const token = getCookie("token");
    console.log("Token:", token);
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
