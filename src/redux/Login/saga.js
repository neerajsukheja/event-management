import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import { showAlert } from "../AlertMessage/action";
import { LOGIN_REQUEST, loginSuccess } from "./action";

function* login({ payload }) {
  try {
    const { data, navigate } = payload;
    const response = yield call(
      axios.get,
      "https://dummyjson.com/products",
      data
    );
    if (response?.status === 200 && response?.data) {
      console.log(response);
      yield put(
        loginSuccess({
          name: "Neeraj Sukheja",
          role: "admin",
          id: 1,
        })
      );
      navigate("/events");
    }
  } catch (error) {
    yield put(showAlert("Something Went Wrong, please try again", "error"));
  }
}

function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, login);
}

export default watchLogin;
