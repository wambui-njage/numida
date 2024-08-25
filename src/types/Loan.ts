export interface LoanProduct {
  id: number;
  name: string;
  interestRate: number;
  maximumAmount: number;
}

export interface LoanProductState {
  loanProducts: LoanProduct[];
  loading: boolean;
  error: string | null;
}
export interface LoanData {
  full_name: string;
  email: string;
  loan_amount: number;
  loan_purpose: string;
}
