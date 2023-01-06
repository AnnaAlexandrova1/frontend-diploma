import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    req: {
      id: '',
    },
    data: {},
}

const seatsParamsSlice = createSlice({
    name: 'routesParams',
    initialState,
    reducers: {
        resetSeats: (state) => initialState,
        setSeatsParams: (state, action) => {
            state.req.id = action.payload.req.id
            state.data.item  = action.payload.data
        }
    }
})

export const { resetSeats, setSeatsParams } = seatsParamsSlice.actions
export default seatsParamsSlice.reducer;