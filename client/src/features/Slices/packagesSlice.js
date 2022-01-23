import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPackages = createAsyncThunk(
  "packages/fetchPackages",
  async () => {
    const baseURL = "http://localhost:5000/r_packages";
    const response = await axios.get(baseURL);
    return response.data;
  }
);

export const fetchPackageById = createAsyncThunk(
  "packageById/fetchPackageById",
  async (id) => {
    const baseURL = `http://localhost:5000/r_packages/${id}`;
    const response = await axios.get(baseURL);
    return response.data;
  }
);

// export const fetchDestinations = createAsyncThunk(
//   "destinations/fetchDestinations",
//   async () => {
//     const baseURL = "http://localhost:5000/destinations";
//     const response = await axios.get(baseURL);
//     return response.data;
//   }
// );

const initialState = {
  packages: {},
  packageById: {},
  // destinations: {},
};

const packagesSlice = createSlice({
  name: "packages",
  initialState,
    // reducers: {
    //     addPackages: (state, {payload}) => {
    //         state.packages = payload;
    //     }
    //   },
  extraReducers: {
    [fetchPackages.pending]: () => {
      console.log("Pending...");
    },
    [fetchPackages.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully!");
      return {
        ...state,
        packages: payload,
      };
    },
    [fetchPackages.rejected]: () => {
      console.log("Rejected!");
    },
    
    [fetchPackageById.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully!");
      return {
        ...state,
        packageById: payload,
      };
    },
    
    // [fetchDestinations.fulfilled]: (state, { payload }) => {
    //   console.log("Fetched successfully!");
    //   return {
    //     ...state,
    //     destinations: payload,
    //   };
    // },
  },
});

// export const { addPackages } = packagesSlice.actions;
 export default packagesSlice.reducer;
