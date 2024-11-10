import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [emailId, setEmailId] = useState("a@gmail.com");
  const [password, setPassword] = useState("A@1234");
  const [firstName, setFirstName] = useState("User");
  const [lastName, setLastName] = useState("One");

  const [isLogin, setIsLogin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   dispatch();

  useEffect(() => {
    console.log(firstName, lastName);
  }, [firstName, lastName]);

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      BASE_URL + "/auth/signup",
      { firstName, lastName, emailId, password },
      { withCredentails: true }
    );
    const data = await res.data;
    // dispatch(addUser(res.data));
    navigate("/feed");
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        BASE_URL + "/auth/login",
        { emailId, password },
        { withCredentials: true }
      );

      const data = await res.data;
      console.log(data);
      dispatch(addUser(res.data.user));
      navigate("/feed");
    } catch (err) {
      console.log("error in login", err.message);
    }
  };

  return (
    <div>
      <div class="hero bg-base-200 min-h-screen bg-gray-900 flex justify-center items-center  bg-[url('https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp')]  opacity-75">
        <div class="hero-content flex-col lg:flex-row-reverse mb-[180px] justify-center gap-20 mt-24">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold text-white z-1">
              {isLogin ? "Login " : "Register "}now!
            </h1>
            <p class="py-6 text-white">
              Keep sharing profile with other users.
              <br></br>As an administrator, you can see who have send you
              connection requests.
            </p>
          </div>
          <div class="card bg-gray-800 w-full max-w-sm shrink-0 shadow-2xl">
            <form class="card-body ">
              {!isLogin && (
                <>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                      type="text"
                      className="grow"
                      placeholder="firstname"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                      type="text"
                      className="grow"
                      placeholder="lastname"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </label>
                </>
              )}
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <div className="flex justify-start items-start ">
                <p className="grow-0 pr-2">
                  {isLogin ? "New , Signup Now!" : "Already a user, try login"}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(!isLogin);
                  }}
                >
                  {" "}
                  {!isLogin ? "Login" : "Register"}
                </button>
              </div>
              <button
                onClick={isLogin ? handleLogin : handleSignup}
                className="bg-purple-950 font-bold text-lg border-inherit rounded-lg mt-5 py-2"
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
