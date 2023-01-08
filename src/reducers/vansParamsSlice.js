import { createSlice } from "@reduxjs/toolkit";
import { drowVansList, filterVans } from "../service/dataTransform";

const initialState = {
  result: [],
  typeVan: "",
  filterVansList: [],
  vanChecked: {},
  numVan: "",
};

const vansParamsSlice = createSlice({
  name: "vansParams",
  initialState,
    reducers: {
    setResult: (prevState, action) => ({
          ...prevState,
          result: action.payload
    }),
    resetVans: (state) => initialState,
    setFilterVansList: (prevState, action) => ({
        ...prevState,
          vanChecked: drowVansList(action.payload),
          filterVansList: action.payload
    }),
        setTypeVan: (prevState, action) => 
            ({
                ...prevState,
            typeVan: action.payload,
            filterVansList: filterVans(prevState.result, action.payload)
            })
        ,
      setVanChecked: (prevState, action) => ({
      ...prevState,
        vanChecked: {
            ...prevState.vanChecked,
           [action.payload.index]: action.payload.p
        }
      }),
      setNumVan:(prevState, action) => ({
        ...prevState,
        numVan: action.payload,
      }),
  },
});

export const { setResult, resetVans, setFilterVansList, setTypeVan, setVanChecked, setNumVan } =
  vansParamsSlice.actions;
export default vansParamsSlice.reducer;
