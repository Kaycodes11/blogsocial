import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import invidual reducer
import userReducer from "./user/user.reducer";
import postReducer from "./post/post.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "post"]
  // whatever key is put within whitelist will be persisted
};

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer
});

export default persistReducer(persistConfig, rootReducer);
