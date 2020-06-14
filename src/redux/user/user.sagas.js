import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import axios from "axios";
import {
  signUpSuccess,
  signUpFaliure,
  signInSuccess,
  signInFaliure,
  signOutSuccess,
  signOutFaliure
} from "./user.action";
// to calculate or manipulate action/actions before sending to reducer also keeping the component clean by putting the code here
// Instead of dispatching from component; dispatching from here if needed keeps component clean especially when it has backend code
// get the payload -> send to server -> pass needed argument to SignUpSucess() and signUpFaliure()

async function signUpWithEmailAndPassword({ email, password, name }) {
  return await axios.post("http://localhost:9090/api/auth/signup", JSON.stringify({ email, password, name }), {
    headers: { "Content-Type": "application/json" }
  });
}
export function* signUp({ payload: { email, password, name } }) {
  try {
    const result = yield call(signUpWithEmailAndPassword, { email, password, name });
    yield put(signUpSuccess(result.data));
  } catch (error) {
    yield put(signUpFaliure(error));
  }
}

async function login({ email, password }) {
  const response = await axios.post("http://localhost:9090/api/auth/signin", JSON.stringify({ email, password }), {
    headers: { "Content-Type": "application/json" }
  });
  return response;
}
async function allowLogin(loginResponse) {
  if (loginResponse.error.code === 1) {
    // email and password is proper : response 200
    return loginResponse;
  } else if (loginResponse.error.code === 0) {
    // email or password doesn't match but DB query is propery done then as it gives response 200 so,
    throw loginResponse.error;
  }
}

// worker saga: signIn (payload taken from signUpStart)
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const loginResponse = yield call(login, { email, password });
    let response = yield call(allowLogin, loginResponse.data);
    yield put(signInSuccess(response));
  } catch (error) {
    yield put(signInFaliure(error));
  }
}

export function* signOut() {
  try {
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFaliure(error));
  }
}

// it will be called when CHECK_USER_SESSION which is as soon as app loads
// export function* onCheckUserSession() {
//   yield takeLatest(UserActionTypes.CHECK_USER_SESSION, signInWithEmail);
// }

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}
export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

// when SIGN_UP_SUCCESS happens (that's when onSignUpStart called) then invoke signInAfterSignUp
// export function* onSignUpSuccess() {
//   yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
// }

// now this userSagas is going to be within root-saga and from there all sagas will be within root-saga & that'll go to Store

export function* userSagas() {
  yield all([call(onEmailSignInStart), call(onSignUpStart), call(onSignOutStart)]);
}

/* An action after dispatch() is going to be used to change the INITIAL VALUE OF THE STATE via reducer
but after dispatching the action before it goes to reducer to "transform/change/update INITIAL STATE's VALUE", use
SAGA to add, remove or customize the action/actions so that these actions acts like that
after getting values and before sent to reducer.

So, basically after action get its value but I don't intend to sent it to ther reducer
as it's (or raw) then using SAGA middleware I can change a particular action/actions before these go to reducer.

What kind of changes can I do before sedning to reducer?
After getting the value, instead of raw value, I can just take certain part of it, mangae backend etc.

just like I can mapDispatchToProps by taking the action and providin its value from that component also I can
import UserActionTypes and user.action and then create a function that will do something and then put the action to
store.

READ: Now I can take an action and dispatch from a component, or using put from middleware

Both ways actions goes to reducer and becomes value of the STATE and using SAGA I can do something before using put()
to send action to reducer */
