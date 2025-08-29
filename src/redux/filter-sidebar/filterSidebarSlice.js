import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const filterSidebarSlice = createSlice({
  name: "filterSidebar",
  initialState,
  reducers: {
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setIsOpen } = filterSidebarSlice.actions;

export default filterSidebarSlice.reducer;
