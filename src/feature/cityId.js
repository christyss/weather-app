import { createSlice } from '@reduxjs/toolkit';

export const cityIdSlice = createSlice({
    name: "cityId",
    initialState: { value: '' },
    reducers: {
        selectCityId: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { selectCityId } = cityIdSlice.actions;

export default cityIdSlice.reducer;