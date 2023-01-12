import { createSlice } from "@reduxjs/toolkit";
import { seatToggle } from "../service/dataTransform";

const initialState = {
    req: {
      id: '',
    },
    data: {},
    seats: []
}

const seatsParamsSlice = createSlice({
    name: 'routesParams',
    initialState,
    reducers: {
        resetSeats: (state) => initialState,
        // setSeatsParams: (state, action) => {
        //     state.req.id = action.payload.req.id
        //     state.data.item  = action.payload.data
        // }
        setSeatsParams: (prevState, action) => ({
            ...prevState,
            req: {
                ...prevState.reg,
                id: action.payload.req.id
            },
            data: {
                ...prevState.data, 
                item: action.payload.data,
            }
        }),
        setSelectSeats: (prevState, action) => ({
            ...prevState,
            seats: [...prevState.seats, {num: action.payload}]
        }),
        resetSelectSeats: (prevState, action) => ({
            ...prevState,
            seats: prevState.seats.filter(item => item.num !== action.payload)
        })
    }
})

export const { resetSeats, setSeatsParams, setSelectSeats, resetSelectSeats } = seatsParamsSlice.actions
export default seatsParamsSlice.reducer;