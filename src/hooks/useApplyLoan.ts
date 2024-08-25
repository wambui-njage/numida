import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { submitForm, submitFormFailure } from "../store/slices/formSlice";
import { LoanData } from "../types/Loan";

// REST API endpoint
const API_URL = "http://192.168.0.103:5000/apply-loan";

const useApplyLoan = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const applyLoan = async (loanData: LoanData) => {
    setLoading(true);
    try {
      const response = await axios.post(API_URL, loanData);
      dispatch(submitForm(loanData));
      return response.data;
    } catch (err) {
      const errorMessage = (err as Error).message || "An error occurred";
      dispatch(submitFormFailure(errorMessage));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { applyLoan, loading };
};

export default useApplyLoan;
