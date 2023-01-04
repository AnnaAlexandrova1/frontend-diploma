import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    from_city_id: '', 
    to_city_id: '',
    date_start: '',
    date_end: '',
}

const routesParamsSlice = createSlice({
    name: 'routesParams',
    initialState,
    reducers: {
        reset: (state) => initialState,
        setParams: (state, action) => {
            state.from_city_id = action.payload.from_city_id;
            state.to_city_id = action.payload.to_city_id;
            state.date_start = action.payload.date_start;
            state.date_end = action.payload.date_end;
        }
    }
})

export const { reset, setParams } = routesParamsSlice.actions
export default routesParamsSlice.reducer;