import UserActionTypes from "./user.types";

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

// as user fills the form; I'll use this to get all those values from the form
export const signUpStart = userCredentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});

// upon succssful sign-up; It'll return an Object that'll have user's detail and some additional metadata
export const signUpSuccess = user => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: user
});
// signUpSuccess({ user: argumentObj})
// upon sign-up failure; whatever it return is accssed and saved to payload property

export const signUpFaliure = error => {
  return {
    type: UserActionTypes.SIGN_UP_FALIURE,
    payload: error
  };
};

// SIGN IN
export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});
export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

// SIGN OUT
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});
