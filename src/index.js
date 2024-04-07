import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import SignUpPage from "./containers/SignUpPage/SignUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import PrivateRouter from "./utils/PrivateRouter";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import LoginPage from "./containers/LoginPage/LoginPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<PrivateRouter/>}>
            <Route element={<HomePage/>} path="/" exact />
          </Route>
          <Route element={<LoginPage/>} path="/login"/>
          <Route element={<SignUpPage/>} path="/signup"/>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
