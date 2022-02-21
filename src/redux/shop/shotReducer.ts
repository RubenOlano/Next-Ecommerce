import { createReducer } from "@reduxjs/toolkit";
import { ICollection } from "../../types/types";
import SHOP_DATA from "./shop.data";

const initialState: ICollection = {
  collections: SHOP_DATA,
};

const shopReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state) => state);
});

export default shopReducer;
