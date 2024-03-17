import { all, fork } from "redux-saga/effects";
import watchSignUpCall from "./SignUp/saga";
import watchLogin from "./Login/saga";
import watchEvents from "./Events/saga";

const rootSaga = function* () {
  yield all([fork(watchSignUpCall), fork(watchLogin), fork(watchEvents)]);
};

export default rootSaga;
