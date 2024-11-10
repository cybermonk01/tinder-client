import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import requestSlice from "./requestSlice";
import connectionSlice from "./connectionSlice";
import feedSlice from "./feedSlice";
import skillSlice from "./skillSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    request: requestSlice,
    connection: connectionSlice,
    feed: feedSlice,
    skill: skillSlice,
  },
});

export default store;
