import { createSlice } from "@reduxjs/toolkit";
import { sortByTime, sortByPrice, sortByDuration } from "../service/dataTransform";

const initialState = {
    trainsList: [],
    printTrainsList: []
};

const trainsParamsSlice = createSlice({
  name: "trainsParams",
  initialState,
    reducers: {
    setTrainsResult: (prevState, action) => ({
          ...prevState,
            trainsList: action.payload,
            printTrainsList: sortByTime(action.payload.items)
        }),
    setSortByTimeTrains: (prevState) => ({
          ...prevState,
            printTrainsList: sortByTime(prevState.trainsList.items)
        }),
    setSortByPriceTrains: (prevState) => ({
          ...prevState,
            printTrainsList: sortByPrice(prevState.trainsList.items)
        }),
    setSortByDurationTrains: (prevState) => ({
          ...prevState,
            printTrainsList: sortByDuration(prevState.trainsList.items)
        })
    }
});

export const { setTrainsResult, setSortByTimeTrains, setSortByPriceTrains, setSortByDurationTrains } =
  trainsParamsSlice.actions;
export default trainsParamsSlice.reducer;
