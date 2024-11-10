import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";
import axios from "axios";

const Requests = () => {
  const requests = useSelector((state) => state.request);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    const res = await axios.post(
      BASE_URL + "/user/requests/received",
      {},
      { withCredentials: true }
    );
    console.log("ress", res?.data);
    dispatch(addRequest(res?.data?.requests));
  };

  console.log("req", requests);
  const handleRequest = async (status, reqId) => {
    const res = await axios.post(
      BASE_URL + "/request/review/" + status + "/" + reqId,
      {},
      { withCredentials: true }
    );
    console.log("accept", res?.data);
    dispatch(removeRequest(reqId));
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length <= 0)
    return <h1 className="flex justify-center my-10">No new users founds!</h1>;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {requests.map((req) => {
              const { _id, firstName, lastName, photoUrl, age, gender, about } =
                req.fromUserId;
              return (
                <tr key={_id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={photoUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {firstName + " " + lastName}
                        </div>
                        <div className="text-sm opacity-50">
                          {age + ", " + gender}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {about}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>
                    <div>
                      <button
                        className="btn mx-4"
                        onClick={() => handleRequest("accepted", req._id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        Accept
                      </button>
                      <button
                        className="btn"
                        onClick={() => handleRequest("rejected", req._id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Reject
                      </button>
                    </div>
                  </td>
                  {/* <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Requests;
