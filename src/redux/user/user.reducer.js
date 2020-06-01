import UserActionTypes from "./user.types";

const INITIAL_STATE_OF_USER = {
  currentUser: null,
  error: null
};

// Based on user's action creator gets invoked & then it's used to change INITTIAL STATE'S VALUE:

const userReducer = (state = INITIAL_STATE_OF_USER, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
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
