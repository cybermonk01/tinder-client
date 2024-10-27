import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import requestSlice from "./requestSlice";
import connectionSlice from "./connectionSlice";
import feedSlice from "./feedSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    request: requestSlice,
    connection: connectionSlice,
    feed: feedSlice,
  },
});

export default store;
