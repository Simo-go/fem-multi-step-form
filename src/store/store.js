import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../store/FormSlice";
import { save, load } from "redux-localstorage-simple";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
  preloadedState: load(),
  middleware: (getDefaultMiddleware) => {
    console.log(getDefaultMiddleware());
    const middleWare = getDefaultMiddleware();
    middleWare.push(save(["form"]));
    return middleWare;
  },
});
