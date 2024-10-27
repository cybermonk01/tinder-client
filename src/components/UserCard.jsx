import React from "react";

const UserCard = () => {
  const handleSendRequest = async ({ status, userId }) => {
    const res = await axios.post(
      BASE_URL + "request/send/" + status + "/" + userId,
      {},
      { withCredentials: true }
    );
    console.log("res", res);
  };

  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="photo-url"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name</h2>
          <p>Choose?</p>
          <div className="card-actions justify-between">
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("ignored", "")}
            >
              Reject
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("interested", "")}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
