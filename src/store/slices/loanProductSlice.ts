import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoanProduct, LoanProductState } from "../../types/Loan";

const initialState: LoanProductState = {
  loanProducts: [],
  loading: false,
  error: null,
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
//do you need a getloanproducts?
export const { setLoanProducts } = loanProductSlice.actions;
export default loanProductSlice.reducer;
