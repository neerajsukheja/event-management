import { combineReducers } from "redux";
import alertMessageReducer from "./AlertMessage/reducer";
import loginReducer from "./Login/reducer";
import eventsReducer from "./Events/reducer";

const rootReducer = combineReducers({
  alertMessage: alertMessageReducer,
  user: loginReducer,
  events: eventsReducer,
});

export default rootReducer;
