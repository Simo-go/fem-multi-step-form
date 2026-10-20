import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../store/FormSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
