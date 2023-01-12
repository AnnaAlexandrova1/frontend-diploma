import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: [],
  typeVan: "",
  filterVansList: [],
};

const ticketParamsSlice = createSlice({
  name: "ticketParams",
  initialState,
    reducers: {
    setResult: (prevState, action) => ({
          ...prevState,
          result: action.payload
    }),
 

  },
});

export const { setResult } =
  ticketParamsSlice.actions;
export default ticketParamsSlice.reducer;
