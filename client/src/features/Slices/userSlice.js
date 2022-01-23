import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  users: {},
};

export const fetchUsers = createAsyncThunk("users/fetchusers", async () => {
  const baseURL = "http://localhost:5000/users";
  const response = await axios.get(baseURL);
  return response.data;
});

const usersSlice = createSlice({
    name: "users",
    initialState,

    extraReducers: {
        [fetchUsers.fulfilled]: (state, {payload}) => {
            return{
                ...state,
                users:payload
            }
        }
    }
})

export default usersSlice.reducer;