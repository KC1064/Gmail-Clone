import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    open: false,
    user: null,
    emails: [],
    selectedEmail: null,
    searchText: "",
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
    setEmails: (state, action) => {
      state.emails = action.payload;
    },
    setSelectedEmails: (state, action) => {
      state.selectedemails = action.payload;
    },
  },
});

export const { setOpen, setAuthUser, setSelectedEmails, setEmails } =
  appSlice.actions;
export default appSlice.reducer;
