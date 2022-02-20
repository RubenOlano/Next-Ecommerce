import { configureStore, Middleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

const middlewares: Middleware[] = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
