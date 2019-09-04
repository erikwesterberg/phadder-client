import { generateAuthActions } from "redux-token-auth";

let authUrl = "http://localhost:3000/api/auth";

const config = {
  authUrl,
  userAttributes: {
    firstName: "first_name",
    lastName: "last_name",
    email: "email"
  },
  userRegistrationAttributes: {
    firstName: "first_name",
    lastName: "last_name",
    email: "email",
    password: "password",
    password_confirmation: "password_confirmation"
  }
};

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials
} = generateAuthActions(config);

export { registerUser, signInUser, signOutUser, verifyCredentials };
