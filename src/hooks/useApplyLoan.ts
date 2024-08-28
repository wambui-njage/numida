import { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { submitForm, submitFormFailure } from "../store/slices/formSlice";

import { LoanData } from "../types/Loan";
import { API_URL } from "@env";

// REST API endpoint
const BASE_URL = `${API_URL}/apply-loan`;

const useApplyLoan = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const applyLoan = async (loanData: LoanData) => {
    setLoading(true);
    try {
      const response = await axios.post(BASE_URL, loanData);
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
