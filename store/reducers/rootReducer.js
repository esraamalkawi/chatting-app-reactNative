import { combineReducers } from "redux";
import userReducer from "./authReducer";
import authReducer from "./authReducer";
import chatReducer from "./chatReducer";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
  user: authReducer,
  allUsers: userReducer,
  chats: chatReducer,
  messages: messageReducer,
});

export default rootReducer;
