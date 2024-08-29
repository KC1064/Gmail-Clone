import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        open: false, // Ensure this is initialized correctly
    },
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload; // Payload should be a boolean
        },
    },
});

export const { setOpen } = appSlice.actions;
export default appSlice.reducer;
