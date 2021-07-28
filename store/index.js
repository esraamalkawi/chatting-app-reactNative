import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchChats } from "./actions/chatActions";
import { fetchMessages } from "./actions/messageActions";

import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchMessages());
store.dispatch(fetchChats());

export default store;
