import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NavbarState {
  focused: string;
}

const initialState: NavbarState = {
  focused: "",
};

export const NavbarSlice = createSlice({
  name: "Navbar",
  initialState,
  reducers: {
    setFocused: (state, action: PayloadAction<string>) => {
      state.focused = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFocused } = NavbarSlice.actions;

export default NavbarSlice.reducer;
