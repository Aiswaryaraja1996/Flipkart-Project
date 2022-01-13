import AuthReducer from "./AuthReducer";
import ProductReducer from "./ProductReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: AuthReducer,
  product: ProductReducer,
});

export const Store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
