import Commerce from "@chec/commerce.js";

// Make a new commerce instance (makes a store)
// This commerce instance handles all the backend API
export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);
