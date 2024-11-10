import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
  name: "skill",
  initialState: [],
  reducers: {
    addSkill: (state, action) => {
      state.push(action.payload);

      return state;
    },

    removeSkill: (state, action) => {
      const newArray = state.filter((skill) => skill != action.payload);
      return newArray;
    },
  },
});

export const { addSkill, removeSkill } = skillSlice.actions;
export default skillSlice.reducer;
