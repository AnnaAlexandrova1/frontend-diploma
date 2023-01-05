import { createSlice } from "@reduxjs/toolkit";

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

const initialState = {
    id: '', 
}

const seatsParamsSlice = createSlice({
    name: 'routesParams',
    initialState,
    reducers: {
        resetSeats: (state) => initialState,
        setSeatsParams: (state, action) => {
            state = {
                ...state, 
                ...action.payload
            }
        }
    }
})

export const { resetSeats, setSeatsParams } = seatsParamsSlice.actions
export default seatsParamsSlice.reducer;