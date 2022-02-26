import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NavbarState {
  focused: string;
  modalView: number;
}

const initialState: NavbarState = {
  focused: "",
  modalView: 0,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setFocused: (state, action: PayloadAction<string>) => {
      state.focused = action.payload;
    },
    setModal: (state, action: PayloadAction<number>) => {
      state.modalView = action.payload;
      state.focused = "";
    },
  },
});

export const { setFocused, setModal } = navbarSlice.actions;

export default navbarSlice.reducer;
