import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import { showAlert } from "../AlertMessage/action";

function* signUpCall({ payload }) {
  try {
    const { data, navigate } = payload;
    const response = yield call(
      axios.get,
      "https://dummyjson.com/products",
      data
    );
    if (response?.status === 200 && response?.data) {
      navigate("/login");
      yield put(
        showAlert(
          "Congratulations! Your account has been successfully created. An activation link has been sent to your email address. Please check your inbox (and spam folder, just in case) to activate your account. Thank you for joining us!",
          "success",
          10000
        )
      );
    }
  } catch (error) {
    yield put(showAlert("Something Went Wrong, please try again", "error"));
  }
}

function* watchSignUpCall() {
  yield takeEvery("SIGN_UP_CALL", signUpCall);
}

export default watchSignUpCall;
