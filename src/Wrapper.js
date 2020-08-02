import React from 'react';
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { App } from "./App";

import Store from './store/store';


export const Wrapper = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  )
}


ReactDOM.render(<Wrapper />, document.getElementById("root"));
