import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Auth from "./pages/EditProfile";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Connections from "./pages/Connections";
import Requests from "./pages/Requests";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./pages/Body";
import Feed from "./pages/Feed";
import Footer from "./components/Footer";
import EditProfile from "./pages/EditProfile";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((store) => store.user);
  return (
    <>
      <BrowserRouter>
        {user && <Navbar />}
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/requests" element={<Requests />} />
        </Routes>
        {user && <Footer />}
      </BrowserRouter>
    </>
  );
}

export default App;
