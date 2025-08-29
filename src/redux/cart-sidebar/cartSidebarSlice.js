import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
};

export const cartSidebarSlice = createSlice({
  name: "cartSidebar",
  initialState,
  reducers: {
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { setIsCartOpen } = cartSidebarSlice.actions;

export default cartSidebarSlice.reducer;
