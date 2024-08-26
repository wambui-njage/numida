export interface LoanProduct {
  id: number;
  name: string;
  interestRate: number;
  maximumAmount: number;
}

export interface LoanProductCardProps {
  product: LoanProduct;
  isActive: boolean;
  onPress: () => void;
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
export interface LoanProductState {
  loanProducts: LoanProduct[];
}

export interface LoanProductModalProps {
  visible: boolean;
  product: LoanProduct | null;
  onClose: () => void;
}
