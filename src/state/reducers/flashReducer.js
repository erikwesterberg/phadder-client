const flashReducer = (state = { message: "" }, action) => {
  switch (action.type) {
    case "DISPATCH_MESSAGE":
      return {
        ...state,
        message: action.payload
      };
    case "CLEAR_MESSAGE":
      return {
        message: ""
      };
    default:
      return state;
  }
};

export default flashReducer;
