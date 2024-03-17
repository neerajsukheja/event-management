// reducer.js
import { EVENTS_SUCCESS } from "./action";

const initialState = [];

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default eventsReducer;
