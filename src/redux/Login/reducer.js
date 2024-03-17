// reducer.js
import { LOGIN_SUCCESS, LOGOUT } from "./action";

const initialState = {};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};

export default loginReducer;
