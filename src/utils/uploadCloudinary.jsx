import axios from "axios";
import React from "react";

const uploadOnCloudinary = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "devTinder");
  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dx78ez1cn/image/upload",
      data
    );

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default uploadOnCloudinary;
