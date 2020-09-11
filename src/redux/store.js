import { createStore, combineReducers, applyMiddleware } from "redux";
import phoneBookReducers from "./phoneBookActions/phoneBookReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  contacts: phoneBookReducers,
});
const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
