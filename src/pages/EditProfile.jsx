import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { addSkill, removeSkill } from "../utils/skillSlice";
import uploadOnCloudinary from "../utils/uploadCloudinary";

const EditProfile = () => {
  const user = useSelector((store) => store.user);
  console.log("user", user);
  const { firstName, lastName, emailId } = user;
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState([]);
  const [img, setImg] = useState(null);
  const [imgUrl, setImgUrl] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const skillss = useSelector((store) => store.skill);
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

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("add chala", e.target[0].value);

    dispatch(addSkill(e.target[0].value));
  };

  const handleRemoveSKill = (skill) => {
    console.log(skill);
    dispatch(removeSkill(skill));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const patch = async () => {
      const res = await axios.patch(
        BASE_URL + "/user/edit",
        { skills, gender, about, age, photoUrl: imgUrl },
        { withCredentials: true }
      );

      console.log(res);
    };
    patch();
  };

  useEffect(() => {
    console.log(img);
    const fetchImg = async (img) => {
      const url = await uploadOnCloudinary(img);
      setImgUrl(url);
      console.log(url);
    };
    fetchImg(img);
  }, [img]);

  return (
    <div className="bg-gray-900 ">
      <div className="flex flex-col text-center w-full mb-12 z-10">
        <div className="flex ">
          <div className="grow h-32">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Complete your Profile👌
            </h1>
            <p className="lg:w-2/3 h-auto mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="flex flex-row">
            <button
              onClick={() => {
                navigate("/feed");
              }}
              class="items-end text-xl relative right-2 bottom-3 flex-none w-24 h-8 bg-yellow-500 text-white rounded-lg"
            >
              Skip...
              {/* <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg> */}
            </button>
          </div>
        </div>
      </div>

      <div className="flex bg-gray-900  relative bottom-36">
        <div className="flex-auto bg-slate-100 w-96">
          <section className="text-gray-400 bg-gray-900 body-font relative">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="firstName"
                        className="leading-7 text-sm text-gray-400"
                      >
                        First-Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="firstName"
                        value={firstName}
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="lastName"
                        className="leading-7 text-sm text-gray-400"
                      >
                        Last-Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="email"
                        className="leading-7 text-sm text-gray-400"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={emailId}
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="skills"
                        className="leading-7 text-sm text-gray-400"
                      >
                        Skills
                      </label>
                      <form type="" onSubmit={handleAdd}>
                        <input
                          type="text"
                          id="skills"
                          name="skills"
                          className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                        <button type="submit">Add</button>
                      </form>
                    </div>
                    {skillss.map((skill) => {
                      return (
                        <div className="">
                          <div className="flex flex-row ">
                            <button
                              className="file-input-bordered file-input-warning w-2/4 max-w-xs border rounded-lg p-1"
                              onClick={() => handleRemoveSKill(skill)}
                            >
                              {skill}
                              <span className="px-2 text-red-600">X</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="age"
                        className="leading-7 text-sm text-gray-400"
                      >
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="gender"
                        className="leading-7 text-sm text-gray-400"
                      >
                        Gender
                      </label>
                      <select
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                        value={gender}
                        className="select select-warning w-full max-w-xs"
                      >
                        <option disabled selected>
                          Select your gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative ">
                      <label
                        for="age"
                        className="leading-7 text-sm text-gray-400 mr-8"
                      >
                        Profile Picture
                      </label>
                      <input
                        type="file"
                        className="file-input file-input-bordered gap-2 file-input-warning w-full max-w-xs"
                        onChange={(e) => {
                          setImg(e.target.files[0]);
                        }}
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        for="message"
                        className="leading-7 text-sm text-gray-400"
                      >
                        About
                      </label>
                      <textarea
                        id="about"
                        name="about"
                        onChange={(e) => setAbout(e.target.value)}
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button
                      className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex-auto w-16 relative top-56">
          <img
            className="lg:w-2/3 w-3/4 lg:h-1/3 h-96 object-cover  rounded"
            alt="logo"
            src={imgUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
