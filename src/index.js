import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import SignUpPage from "./containers/SignUpPage/SignUpPage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./containers/HomePage";
import PrivateRouter from "./utils/PrivateRouter";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import LoginPage from "./containers/LoginPage/LoginPage";
import FriendPage from "./containers/FriendPage";
import ProfilePage from "./containers/ProfilePage";
import VideoCallPage from "./containers/VideoCallPage";
import MessagePage from "./containers/MessagePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<PrivateRouter/>}>
            <Route element={<HomePage/>} path="/" />
            <Route element={<FriendPage/>} path="/friend"/>
            <Route element={<ProfilePage/>} path="/profile"/>
            <Route element={<VideoCallPage/>} path="/video-call"/>
            <Route element={<MessagePage/>} path="/message"/>
            <Route path="*" element={<Navigate to="/errorpage" />} />
          </Route>
          <Route element={<LoginPage/>} path="/login"/>
          <Route element={<SignUpPage/>} path="/signup"/>
          <Route path="*" element={<Navigate to="/errorpage" />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
