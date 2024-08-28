import loanProductReducer, {
  setLoanProducts,
  setActiveLoanProduct,
} from "../../src/store/slices/loanProductSlice";
import { LoanProduct } from "../../src/types/Loan";

describe("loanProductSlice", () => {
  const initialState = {
    loanProducts: [],
    activeLoanProduct: null,
  };

  const mockLoanProduct: LoanProduct = {
    id: 1,
    name: "Test Loan",
    maximumAmount: 5000,
    interestRate: 5,
  };

  it("should return the initial state", () => {
    expect(loanProductReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle setLoanProducts", () => {
    const actual = loanProductReducer(
      initialState,
      setLoanProducts([mockLoanProduct])
    );
    expect(actual.loanProducts).toEqual([mockLoanProduct]);
  });

  it("should handle setActiveLoanProduct", () => {
    const actual = loanProductReducer(
      initialState,
      setActiveLoanProduct(mockLoanProduct)
    );
    expect(actual.activeLoanProduct).toEqual(mockLoanProduct);
  });
});
