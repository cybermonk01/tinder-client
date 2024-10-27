import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import { BASE_URL } from "../utils/constants";

const Profile = () => {
  const [fName, setFname] = useState("User");
  const [lName, setLname] = useState("One");
  const [skills, setSkills] = useState();
  const [age, setAge] = useState(18);
  const [photoUrl, setPhotoUrl] = useState();
  const user = useSelector((state) => state.user);
  l;

  //   const { fName, lName, emailId, skills, photoUrl, age } = user;

  const handleEdit = async (e) => {
    const res = await axios.get(
      BASE_URL + "/user/profile/edit",
      {
        skills,
        age,
        gender,
        photoUrl,
        description,
      },
      { withCredentials: true }
    );
  };

  return (
    <div className="flex justify-center items-center mx-10">
      <div className="mx-10">
        {/* <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label> */}
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
            value={fName}
            onChange={(e) => setFname(e.target.value)}
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
            placeholder="firstname"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
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
            placeholder="firstname"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
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
            placeholder="firstname"
            value={age}
            onChange={(e) => setAge(e.target.value)}
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
            placeholder="firstname"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center ">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg> */}
          <input
            type="file"
            className="file-input file-input-bordered file-input-info w-full max-w-xs"
          />
        </label>

        <p>{"Do you want to make these changes!"}</p>
        <button onClick={handleEdit}>Edit Changes</button>
      </div>
      <UserCard />
    </div>
  );
};

export default Profile;

// const edit = async (req, res) => {
//   try {
//     const { age, skills, photoUrl, description } = req.body;

//     const loggedInUser = req.user;

//     const user = await User.findOne(
//       { emailId },
//       {
//         $set: {
//           age,
//           skills,
//           photoUrl,
//           description,
//         },
//       },
//       { validateBeforeSave: false }
//     );

//     return res.status(200).json({
//         message: "User Profile Updated Successfully!",
//         user
//     })
//   } catch (err) {
//     res.status(400).send("error in editing profile", err.message);
//   }
// };
