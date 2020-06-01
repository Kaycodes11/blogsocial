import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import { signUpSuccess, signUpFaliure } from "./user.action";
import { createHtttpClient } from "../../service/AxiosHttpClient";
// to calculate or manipulate action/actions before sending to reducer also keeping the component clean by putting the code here
// Instead of dispatching from component; dispatching from here if needed keeps component clean especially when it has backend code
// get the payload -> send to server -> pass needed argument to SignUpSucess() and signUpFaliure()
export function* signUp({ payload: { email, password, displayName } }) {
  try {
    createHtttpClient({
      headers: { "content-type": "application/json" },
      method: "post",
      data: JSON.stringify({ email, password, displayName })
    });
    yield put(signUpSuccess({ email, password, displayName }));
  } catch (error) {
    yield put(signUpFaliure(error));
  }
}

// export function* onCheckUserSession() {
//   yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
// }
export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}
// when SIGN_UP_SUCCESS happens (that's when onSignUpStart called) then invoke signInAfterSignUp
// export function* onSignUpSuccess() {
//   yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
// }

// now this userSagas is going to be within root-saga and from there all sagas will be within root-saga & that'll go to Store
export function* userSagas() {
  yield all([call(onSignUpStart)]);
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
