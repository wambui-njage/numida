export interface FormData {
  full_name: string;
  email: string;
  loan_amount: number;
  loan_purpose: string;
}
export interface FormState {
  formData: FormData;
  submissionSuccess: boolean;
  error: string | null;
}
