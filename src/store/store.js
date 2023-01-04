import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from '../api/api'
import routesParamsSlice from "../reducers/routesParamsSlice"


const store = configureStore({
    reducer: {
            routesParamsSlice: routesParamsSlice,
            [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)

export default store