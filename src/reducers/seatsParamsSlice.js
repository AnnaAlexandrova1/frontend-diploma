import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    req: {
      id: '',
    },
    data: {},
    seats: [],
    category: 'adult'
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
            seats: [...prevState.seats, {num: action.payload.num, category: prevState.category, price: action.payload.price}]
        }),
        resetSelectSeats: (prevState, action) => ({
            ...prevState,
            seats: prevState.seats.filter(item => item.num !== action.payload)
        }), 
        setPassInfo: (prevState, action) => ({
            ...prevState,
            seats: prevState.seats.map(elem => {
            if (elem.num === action.payload.itemNum) {
               return {
                    ...elem,
                    [action.payload.key]: action.payload.value
                }
            } else {
                return elem
            }
        })
        }), 
        deletePassInfo: (prevState, action) => ({
            ...prevState,
            seats: prevState.seats.filter(elem => elem.num !== action.payload)
        }),
        setCategory: (prevState, action) => ({
            ...prevState,
            category: action.payload
        }),

    }
})

export const { resetSeats, setSeatsParams, setSelectSeats, resetSelectSeats, setPassInfo, deletePassInfo, setCategory } = seatsParamsSlice.actions
export default seatsParamsSlice.reducer;