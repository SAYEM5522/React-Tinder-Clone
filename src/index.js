import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tinder from './Tinder';
import store from "./app/store";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
  <Tinder />
</Provider>,   
  document.getElementById('root')
);



