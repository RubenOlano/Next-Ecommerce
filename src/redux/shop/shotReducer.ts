import { createReducer } from "@reduxjs/toolkit";
import SHOP_DATA, { ISHOP_DATA } from "./shop.data";

interface ICollection {
  collections: ISHOP_DATA;
}

const initialState: ICollection = {
  collections: SHOP_DATA,
};

const shopReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state) => state);
});

export default shopReducer;
