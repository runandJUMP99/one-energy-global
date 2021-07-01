import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";

import './index.css';
import App from './App';

import authReducer from "./store/reducers/auth";
import modalReducer from "./store/reducers/modal";
import usersReducer from "./store/reducers/users";

const reducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  users: usersReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);