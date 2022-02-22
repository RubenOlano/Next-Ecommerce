import { createReducer } from "@reduxjs/toolkit";
import { ICollection } from "../../types/types";
import { updateCollections } from "./shopActions";

const initialState: ICollection = {} as ICollection;

const shopReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateCollections, (state, action) => {
    state.collections = action.payload;
  });
  builder.addDefaultCase((state) => state);
});

export default shopReducer;
