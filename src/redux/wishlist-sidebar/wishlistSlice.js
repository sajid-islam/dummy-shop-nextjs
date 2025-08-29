import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isWishlistOpen: false,
};

export const wishlistSidebarSlice = createSlice({
  name: "wishlistSidebar",
  initialState,
  reducers: {
    setIsWishlistOpen: (state) => {
      state.isWishlistOpen = !state.isWishlistOpen;
    },
  },
});

export const { setIsWishlistOpen } = wishlistSidebarSlice.actions;

export default wishlistSidebarSlice.reducer;
