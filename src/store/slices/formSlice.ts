import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormData, FormState } from "../../types/Form";

const initialState: FormState = {
  formData: {
    full_name: "",
    email: "",
    loan_amount: 0,
    loan_purpose: "",
  },
  submissionSuccess: false,
  error: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    submitForm: (state, action: PayloadAction<FormData>) => {
      state.formData = action.payload;
      state.submissionSuccess = true;
      state.error = null;
    },
    submitFormFailure: (state, action: PayloadAction<string>) => {
      state.submissionSuccess = false;
      state.error = action.payload;
    },
    clearForm: (state) => {
      state.formData = {
        full_name: "",
        email: "",
        loan_amount: 0,
        loan_purpose: "",
      };
      state.submissionSuccess = false;
      state.error = null;
    },
  },
});

export const { submitForm, submitFormFailure, clearForm } = formSlice.actions;

export default formSlice.reducer;
