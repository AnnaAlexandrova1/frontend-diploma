import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../api/api";
import routesParamsSlice from "../reducers/routesParamsSlice";
import seatsParamsSlice from "../reducers/seatsParamsSlice";
import vansParamsSlice from "../reducers/vansParamsSlice";

const store = configureStore({
  reducer: {
    routesParamsSlice: routesParamsSlice,
    seatsParamsSlice: seatsParamsSlice,
    vansParamsSlice: vansParamsSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
