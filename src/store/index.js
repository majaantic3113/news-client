import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import topNewsReducer from "./reducers/top-news.reducer";
import countriesReducer from "./reducers/countries.reducer";

const store = createStore(
  combineReducers({ topNews: topNewsReducer, countries: countriesReducer }),
  applyMiddleware(thunk)
);

export default store;