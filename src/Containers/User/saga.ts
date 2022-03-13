import { takeLatest, put, call } from "redux-saga/effects";
import userActionsTypes from "./constants";
import axios from "axios";
import { login, loading, fail, success } from "./actions"


const URL_API = process.env.REACT_APP_URL_API;
const postRegister = (body: object) => {
  return axios
    .post(URL_API + '/users/register', { ...body })
    .then(response => ({ response }))
    .catch(error => ({ error }));
};

function* SignUpSaga(signUpAction: any): any {
  yield put(loading(true));
  const userData = {
    ...signUpAction.userData,
    passwordConfirmation: signUpAction.userData.password
  }
  const { response, error } = yield call(postRegister, userData);
  if (response) {
    console.log(response)
    yield put(success("User created successfully"));
  } else {
    console.log(error.response.data)
    yield put(fail(error.response.data.error));
  }

  yield put(loading(false));
}

const postLogin = (body: object) => {
  return axios
    .post(URL_API + '/login', { ...body })
    .then(response => ({ response }))
    .catch(error => ({ error }));
};

function* loginSaga(userData: {}): any {
  yield put(loading(true));

  const { response, error } = yield call(postLogin, userData);
  if (response) {
    console.log(response)
    yield put(login(response.data));
  } else yield put(fail(error));

  yield put(loading(false));
}

export const userSagas = [
  takeLatest(userActionsTypes.LOGIN, loginSaga),
  takeLatest(userActionsTypes.REGISTER, SignUpSaga),
]