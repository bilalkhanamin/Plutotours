import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    messages:{}
}

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async () => {
    const baseURL = "http://localhost:5000/-message";
    const response = await axios.get(baseURL);
    return response.data;
  }
);

const messageSlice = createSlice({
    name: "messages",
    initialState,
    extraReducers:{
        [fetchMessages.fulfilled]:(state, {payload}) => {
            return {
                ...state,
                messages:payload
            }
        }
    }
})


export default messageSlice.reducer;
