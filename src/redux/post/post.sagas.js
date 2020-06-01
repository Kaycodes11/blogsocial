import { takeLatest, put, all, call } from "redux-saga/effects";
import { postCollectionsSuccess, postCollectionsFaliure } from "./post.action";
import PostActionTypes from "./post.types";

export function* postCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(postCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* onPostCollectionsStart() {
  yield takeLatest(PostActionTypes.POST_COLLECTIONS_START, postCollectionsAsync);
}

export function* postSagas() {
  yield all([call(onPostCollectionsStart)]);
}
// Handing async calls for ex. data fetching and side dom management
