import { createStore, compose,combineReducers } from "redux";

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import {chatReducers} from './chatReducers'
let allReducers = combineReducers({chatReducers})

export const store = createStore(
  allReducers,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
