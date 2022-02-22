import { createAction } from "@reduxjs/toolkit";
import { ISHOP_DATA } from "../../types/types";

export const updateCollections = createAction<ISHOP_DATA>(
  "shop/updateCollections"
);
