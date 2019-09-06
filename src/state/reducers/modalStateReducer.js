const initialModalState = {
  displayCreateServiceRequestModal: false
};

const modalStateReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case "SHOW_CREATE_SERVICE_REQ":
      return {
        ...state,
        displayCreateServiceRequestModal: true
      };
    case "HIDE_CREATE_SERVICE_REQ":
      return {
        ...state,
        displayCreateServiceRequestModal: false
      };
    default:
      return state;
  }
};

export default modalStateReducer