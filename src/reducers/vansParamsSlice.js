import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typeVan: "",
  filterVansList: [],
};

const vansParamsSlice = createSlice({
  name: "vansParams",
  initialState,
  reducers: {
    resetVans: (state) => initialState,
      setFilterVansList: (prevState, action) => ({
          ...prevState,
          filterVansList: action.payload
    }),
    setTypeVan: (prevState, action) => ({
      ...prevState,
      typeVan: action.payload,
    }),
  },
});

export const { resetVans, setFilterVansList, setTypeVan } =
  vansParamsSlice.actions;
export default vansParamsSlice.reducer;
