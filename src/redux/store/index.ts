import { configureStore } from "@reduxjs/toolkit";
import tripSlice from '../slices/tripSlice';

export const store = configureStore({
    reducer:{
        trip: tripSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;