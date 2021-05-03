import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import App from "./components/App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { getAllSpecialities } from "./redux/actionCreators";

store.dispatch(getAllSpecialities());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
