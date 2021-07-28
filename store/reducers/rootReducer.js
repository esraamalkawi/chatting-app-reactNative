import { combineReducers } from "redux";
import authReducer from "./authReducer";
import chatReducer from "./chatReducer";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
  user: authReducer,
  chats: chatReducer,
  messages: messageReducer,
});

export default rootReducer;
