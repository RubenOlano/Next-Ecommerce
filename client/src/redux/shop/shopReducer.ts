import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICollection, ISHOP_DATA } from "../../types/types";
import { fetchCollections } from "./shopActions";

const initialState: ICollection = {} as ICollection;

const shopSlice = createSlice({
  initialState,
  name: "shop",
  reducers: {
    updateCollections(state, action: PayloadAction<ISHOP_DATA>) {
      state.collections = action.payload;
    },
    fetchSuccess(state, action: PayloadAction<ISHOP_DATA>) {
      state.collections = action.payload;
      state.isFetching = false;
    },
    fetchfailure(state, action: PayloadAction<unknown>) {
      state.errorMessage = action.payload as string;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollections.fulfilled, (state, actions) => {
        state.collections = actions.payload;
        state.isFetching = false;
      })
      .addCase(fetchCollections.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchCollections.rejected, (state) => {
        state.isFetching = false;
      });
  },
});

export const { updateCollections, fetchSuccess, fetchfailure } =
  shopSlice.actions;

export default shopSlice.reducer;
