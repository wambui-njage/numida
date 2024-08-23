export interface LoanProduct {
  id: string;
  name: string;
  interestRate: number;
  maximumAmount: number;
}

export interface LoanProductState {
  loanProducts: LoanProduct[];
  loading: boolean;
  error: string | null;
}
