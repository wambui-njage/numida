import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoanProduct {
  id: number;
  name: string;
  interestRate: number;
  maximumAmount: number;
}

interface LoanProductState {
  loanProducts: LoanProduct[];
}

const initialState: LoanProductState = {
  loanProducts: [], // Initialize as an empty array
};

const loanProductSlice = createSlice({
  name: "loanProducts",
  initialState,
  reducers: {
    setLoanProducts: (state, action: PayloadAction<LoanProduct[]>) => {
      state.loanProducts = action.payload;
    },
  },
});

export const { setLoanProducts } = loanProductSlice.actions;
export default loanProductSlice.reducer;
