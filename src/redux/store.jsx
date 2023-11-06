import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/countSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
