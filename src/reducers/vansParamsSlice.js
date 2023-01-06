import { createSlice } from "@reduxjs/toolkit";
import { drowVansList } from "../service/dataTransform";

const initialState = {
  typeVan: "",
  filterVansList: [],
  vanChecked: {},
};

const vansParamsSlice = createSlice({
  name: "vansParams",
  initialState,
  reducers: {
    resetVans: (state) => initialState,
    setFilterVansList: (prevState, action) => ({
        ...prevState,
          vanChecked: drowVansList(action.payload),
          filterVansList: action.payload
    }),
    setTypeVan: (prevState, action) => ({
        ...prevState,
      typeVan: action.payload,
      }),
      setVanChecked: (prevState, action) => ({
      ...prevState,
        vanChecked: {
            ...prevState.vanChecked,
           [action.payload.index]: action.payload.p
        }
      }),
  },
});

export const { resetVans, setFilterVansList, setTypeVan, setVanChecked } =
  vansParamsSlice.actions;
export default vansParamsSlice.reducer;
