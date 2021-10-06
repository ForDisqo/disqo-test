import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import setupStore from "./redux/setupStore";
import {Provider} from "react-redux";


const OLD_REDUX_STORE = localStorage.getItem("oldReduxState");

let REDUX_INITIAL_STATE = {};
if (OLD_REDUX_STORE) {
    REDUX_INITIAL_STATE = JSON.parse(OLD_REDUX_STORE);
}

const store = setupStore(REDUX_INITIAL_STATE);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
            <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
