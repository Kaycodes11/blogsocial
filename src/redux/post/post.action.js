import PostActionTypes from "./post.types";

export const postCollectionsStart = post => ({
  type: PostActionTypes.POST_COLLECTIONS_START,
  payload: post
});

export const postCollectionsSuccess = postCollectionsMap => ({
  type: PostActionTypes.POST_COLLECTIONS_SUCCESS,
  payload: postCollectionsMap
});

export const postCollectionsFaliure = error => {
  return {
    type: PostActionTypes.POST_COLLECTIONS_FALIURE,
    payload: error
  };
};

// export const fetchCollectionsStartAsync = () => {
//   return dispatch => {
//     const collectionRef = firestore.collection("collections");
//     dispatch(fetchCollectionsStart());

//     collectionRef
//       .get()
//       .then(snapshot => {
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch(error => dispatch(fetchCollectionsFailure(error.message)));
//   };
// };
