const initialState = {
  message: "",
  type: "",
  visible: false,
  time: 5000,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_ALERT":
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
        visible: true,
        time: action.payload.time,
      };
    case "HIDE_ALERT":
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};

export default alertReducer;
