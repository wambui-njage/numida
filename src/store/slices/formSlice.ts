import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormData {
  fullName: string;
  email: string;
  loanAmount: number;
  loanPurpose: string;
}

interface FormState {
  formData: FormData;
  submissionSuccess: boolean;
  error: string | null;
}

const initialState: FormState = {
  formData: {
    fullName: "",
    email: "",
    loanAmount: 0,
    loanPurpose: "",
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
  },
});

export const { submitForm, submitFormFailure } = formSlice.actions;

export default formSlice.reducer;
