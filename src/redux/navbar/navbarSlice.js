import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setIsOpen } = navbarSlice.actions;

export default navbarSlice.reducer;
