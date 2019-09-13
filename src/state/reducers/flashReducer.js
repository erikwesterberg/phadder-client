const flashReducer = (state = { message: "" }, action) => {
  switch (action.type) {
    case "DISPATCH_MESSAGE":
      return {
        ...state,
        message: { ...action.payload, display: true },

      };
    case "CLEAR_MESSAGE":
      return {
        display: true 
      };
    default:
      return state;
  }
};

export default flashReducer;
