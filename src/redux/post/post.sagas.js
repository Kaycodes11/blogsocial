import { takeLatest, put, all, call } from "redux-saga/effects";
import PostActionTypes from "./post.types";
import axios from "axios";
import { postCollectionsSuccess, postCollectionsFaliure } from "./post.action";

// SENDING POST REQUEST : required to send  = title, mainContent, desc, labels
async function savePostToDb({ title, labels, mainContent, desc }) {
  const response = axios.post(
    "http:localhost:9090/api/posts/create",
    JSON.stringify({ title, labels, mainContent, desc }),
    {
      headers: { "content-type": "application/json" }
    }
  );
  return response;
}
async function allowSubmit(postData) {
  if (postData.error.code === 1) {
    return postData;
  } else if (postData.error.code === 1) {
    throw postData.error;
  }
}
export function* submitPost({ payload: { title, labels, mainContent, desc } }) {
  try {
    /* savePostToDb expected arguments'll be from this function that comes from postCollectionsStart's payload which SAGA
     gets from postCollectionsStart as it goes to reducetr after dispatched from createPost component */
    const savePostToDbResponse = yield call(savePostToDb, { title, labels, mainContent, desc }); //database POST request
    const response = yield call(allowSubmit, savePostToDbResponse.data);
    yield put(postCollectionsSuccess(response));
  } catch (error) {
    yield put(postCollectionsFaliure(error));
  }
}

export function* onPostCollectionsStart() {
  yield takeLatest(PostActionTypes.POST_COLLECTIONS_START, submitPost);
}

export function* postSagas() {
  yield all([call(onPostCollectionsStart)]);
}
// Handing async calls for ex. data fetching and side dom management
