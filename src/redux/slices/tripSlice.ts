import { RootState } from './../store/index';
import { createSlice } from "@reduxjs/toolkit";
import { TripState } from "../../types/tripTypes";

export const initialState: TripState = {
    budget: 0,
    selectedCitiesList: [],
    cities: [
        { id: 1, name: 'Paris', cost: 500 },
        { id: 2, name: 'London', cost: 450 },
        { id: 3, name: 'Barcelona', cost: 400 },
        { id: 4, name: 'Madrid', cost: 350 },
        { id: 5, name: 'Rome', cost: 300 },
        { id: 6, name: 'Amsterdam', cost: 250 },
        { id: 7, name: 'Prague', cost: 200 },
        { id: 8, name: 'Brussels', cost: 150 },
        { id: 9, name: 'Budapest', cost: 100 },
        { id: 10, name: 'Istanbul', cost: 50 },
    ],
}

export const TripSlice = createSlice({
    name: 'trip',
    initialState,
    reducers: {
        addToSelectedCitiesList: (state: TripState, action) => {
            if (!state.selectedCitiesList.filter(c => c.id == action.payload.id)[0]) {
                let newList = [...state.selectedCitiesList, action.payload];
                state.selectedCitiesList = newList
            }
        },
        removeFromSelectedCitiesList: (state: TripState, action) => {
            let newList = state.selectedCitiesList.filter(c => c.id != action.payload.id)
            state.selectedCitiesList = newList
        },
        setBudget: (state: TripState, action) => {
            state.budget = action.payload
        },
        emptySelectedCitiesList: (state: TripState) => {
            state.selectedCitiesList = []
        },
    }
})

//Actions
export const { addToSelectedCitiesList, removeFromSelectedCitiesList, setBudget, emptySelectedCitiesList } = TripSlice.actions;

//Selectors
export const selectSelectedCitiesList = (state: RootState) => state.trip.selectedCitiesList;
export const selectBudget = (state: RootState) => state.trip.budget;
export const selectCitiesAndPrices = (state: RootState) => state.trip.cities;

export default TripSlice.reducer;