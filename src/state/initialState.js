const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        firstName: "",
        lastName: "",
        email: "", 
      },
    },
  },
}

export default initialState