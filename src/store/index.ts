import { configureStore } from "@reduxjs/toolkit";
import loanProductReducer from "./slices/loanProductSlice";
import formReducer from "./slices/formSlice";

export const store = configureStore({
  reducer: {
    loanProducts: loanProductReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
