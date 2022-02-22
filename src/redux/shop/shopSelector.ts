import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

const selectShop = (state: RootState) => state.shop.collections;
const selectID = (_state: RootState, id: string) => id;

export const selectCollectionsForPreview = createSelector(
  [selectShop],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = createSelector(
  [selectShop, selectID],
  (collections, id) => (collections ? collections[id] : null)
);
