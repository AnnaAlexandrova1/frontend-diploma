import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../api/api";
import routesParamsSlice from "../reducers/routesParamsSlice";
import seatsParamsSlice from "../reducers/seatsParamsSlice";
import vansParamsSlice from "../reducers/vansParamsSlice";
import trainsParamsSlice from "../reducers/trainsParamsSlise";
import ticketParamsSlice from "../reducers/ticketParamsSlice";

const store = configureStore({
  reducer: {
    routesParamsSlice: routesParamsSlice,
    seatsParamsSlice: seatsParamsSlice,
    trainsParamsSlice: trainsParamsSlice,
    vansParamsSlice: vansParamsSlice,
    ticketParamsSlice: ticketParamsSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
