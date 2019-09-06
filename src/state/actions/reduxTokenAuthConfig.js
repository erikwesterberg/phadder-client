import { generateAuthActions } from "redux-token-auth";

let authUrl = "http://localhost:3000/api/auth";

const config = {
  authUrl,
  userAttributes: {
    firstName: "firstName",
    lastName: "lastName",
    email: "email"
  },
  userRegistrationAttributes: {
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
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
