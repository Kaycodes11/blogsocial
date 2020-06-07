import PostActionTypes from "./post.types";

const INITIAL_STATE_OF_POST = {
  postCollection: [],
  error: null,
  isPostCollectionLoading: true
};

const postReducer = (state = INITIAL_STATE_OF_POST, action) => {
  switch (action.type) {
    case PostActionTypes.POST_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isPostCollectionLoading: false,
        postCollection: action.payload
      };
    case PostActionTypes.POST_COLLECTIONS_FALIURE:
      return {
        ...state,
        isPostCollectionLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
export default postReducer;
