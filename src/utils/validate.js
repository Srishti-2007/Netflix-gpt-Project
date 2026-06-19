export const checkValidateData = (email, password, name, isSignInForm) => {
  // Email Validation
  if (!email) {
    return "Please enter your email address.";
  }

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isEmailValid) {
    return "Please enter a valid email address (example: abc@gmail.com).";
  }
  // password validation
  if (!password) {
    return "Please enter your password.";
  }

  const isPasswordValid = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/.test(password);
  if (!isPasswordValid) {
    return "Password must be 8+ characters with 1 uppercase and 1 number.";
  }
  // Name Validation (Only Sign Up)
 if (!isSignInForm) {

  if (!name) {
    return "Please enter your full name.";
  }

  const isNameValid = /^[A-Za-z ]{3,30}$/.test(name);

  if (!isNameValid) {
    return "Full name should contain only letters and spaces (3–30 characters).";
  }
}
  return null;
};
