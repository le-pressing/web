import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NavbarState {
  focused: string;
}

const initialState: NavbarState = {
  focused: "",
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setFocused: (state, action: PayloadAction<string>) => {
      state.focused = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFocused } = navbarSlice.actions;

export default navbarSlice.reducer;
