import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoanProduct } from "../../types/Loan";

interface LoanProductState {
  loanProducts: LoanProduct[];
  activeLoanProduct: LoanProduct | null;
}

const initialState: LoanProductState = {
  loanProducts: [],
  activeLoanProduct: null,
};

const loanProductSlice = createSlice({
  name: "loanProducts",
  initialState,
  reducers: {
    setLoanProducts: (state, action: PayloadAction<LoanProduct[]>) => {
      state.loanProducts = action.payload;
    },
    setActiveLoanProduct: (
      state,
      action: PayloadAction<LoanProduct | null>
    ) => {
      state.activeLoanProduct = action.payload;
    },
  },
});

export const { setLoanProducts, setActiveLoanProduct } =
  loanProductSlice.actions;

export default loanProductSlice.reducer;
