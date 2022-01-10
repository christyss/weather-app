import { createSlice } from '@reduxjs/toolkit';

export const showHideSlice = createSlice({
    name: "showHide",
    initialState: {show: false},
    reducers: {
        showHide: (state, action) => {
            state.show = action.payload;
        },
    },
});

export const { showHide } = showHideSlice.actions;

export default showHideSlice.reducer;