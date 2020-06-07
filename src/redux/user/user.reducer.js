import UserActionTypes from "./user.types";

const INITIAL_STATE_OF_USER = {
  currentUser: null,
  error: null,
  isAuthenticated: false
};

// Based on user's action creator gets invoked & then it's used to change INITTIAL STATE'S VALUE:

const userReducer = (state = INITIAL_STATE_OF_USER, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_UP_SUCCESS:
    case UserActionTypes.SIGN_IN_SUCCESS:
      console.log("ACTION", action.payload);
      const payload = action.payload;
      return payload.error.code === 1
        ? {
            ...state,
            currentUser: action.payload,
            isAuthenticated: true,
            error: null
          }
        : {
            ...state,
            currentUser: null,
            isAuthenticated: false,
            error: payload.error
          };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
        isAuthenticated: false
      };
    case UserActionTypes.SIGN_IN_FALIURE:
    case UserActionTypes.SIGN_OUT_FALIURE:
    case UserActionTypes.SIGN_UP_FALIURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
