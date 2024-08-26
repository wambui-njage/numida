// src/utils/validationSchema.ts
import * as Yup from "yup";

export const createValidationSchema = (maximumAmount: number) =>
  Yup.object().shape({
    fullname: Yup.string()
      .matches(
        /^[a-zA-Z]+\s[a-zA-Z]+$/,
        "Full name must include at least two names"
      )
      .required("Full name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    amount: Yup.number()
      .typeError("Amount must be a number")
      .required("Amount is required")
      .moreThan(0, "Loan amount must be greater than 0")
      .max(
        maximumAmount,
        `Loan amount cannot exceed USD ${maximumAmount.toLocaleString()}`
      ),

    purpose: Yup.string()
      .min(5, "Loan purpose must be more than 4 characters")
      .required("Loan purpose is required"),
  });
