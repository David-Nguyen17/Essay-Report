import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AuthSlice from "./slices/AuthSlice";
import CommentSlice from "./slices/CommentSlice";

const rootReducers = combineReducers({
  "feature/auth": persistReducer(
    {
      key: "user",
      storage: storage,
      whitelist: ["access_token", "refresh_token"],
    },
    AuthSlice.reducer,
  ),
  "feature/comments": persistReducer(
    {
      key: "comments",
      storage: storage,
      whitelist: ["comments"],
    },
    CommentSlice.reducer,
  ),
});
const persistedReducer = persistReducer(
  {
    key: "root",
    debug: true,
    storage: storage,
    version: 1.0,
    whitelist: [],
  },
  rootReducers,
);
export default persistedReducer;
