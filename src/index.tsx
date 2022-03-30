import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { App } from "./components/App";
import { reducers } from "./reducers/index";

const store = createStore(reducers, applyMiddleware(thunk));

const container = document.getElementById("root");

if (container) {
  const root = ReactDOMClient.createRoot(container);

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};
