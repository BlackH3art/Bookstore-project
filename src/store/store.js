import { createStore } from "redux";
import rootReducer from './rootReducer';

const Store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // łączenie z dev tools
);

export default Store;