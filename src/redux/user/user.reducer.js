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
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGN_IN_FALIURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
