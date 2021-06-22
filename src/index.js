import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from "react-redux";
// import { createStoreHook, applyMiddleware, combineReducers} from "redux";
// import thunk from "redux-thunk";

import './index.css';
import App from './App';

// import authReducer from "./store/reducers/auth";

// const reducers = combineReducers({
//   auth: authReducer
// });

// const store = createStore(reduceres, applyMiddleware(thunk));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);