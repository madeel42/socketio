import React from "react";
import "./App.css";
import Chatapp  from "./component/chatapp";
import {store} from "./store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Chatapp />
      </div>
    </Provider>
  );
}

export default App;
