import errorMessages from "../../src/constants/errorMessages";

describe("Error Messages", () => {
  it('should match the error message for "noLoanProducts"', () => {
    expect(errorMessages.noLoanProducts).toBe("No loan products available");
  });

  it('should match the error message for "networkError"', () => {
    expect(errorMessages.networkError).toBe(
      "A network error occurred. Please check your connection and try again."
    );
  });

  it('should match the error message for "noLoanProductSelected"', () => {
    expect(errorMessages.noLoanProductSelected).toBe(
      "Please select a loan product before applying."
    );
  });

  it('should match the error message for "genericError"', () => {
    expect(errorMessages.genericError).toBe("Something went wrong");
  });
});
