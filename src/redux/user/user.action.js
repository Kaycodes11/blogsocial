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
