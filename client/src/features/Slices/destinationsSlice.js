import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  destinations: {},
};

export const fetchDestinations = createAsyncThunk(
  "destinations/fetchDestinations",
  async () => {
    const baseURL = "http://localhost:5000/destinations";
    const response = await axios.get(baseURL);
    return response.data;
  }
);

const destinationSlice = createSlice({
    name: "destinations",
    initialState,
    extraReducers:{
        [fetchDestinations.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                destinations:payload
            }
        }
    }
})

export default destinationSlice.reducer;