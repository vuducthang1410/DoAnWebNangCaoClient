import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRouter from "./utils/PrivateRouter";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import LoginPage from "./pages/LoginPage/LoginPage";
import VideoCallPage from "./pages/VideoCallPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { WebSocketProvider } from "./services/WebSocketContext";
import PasswordResetPage from "./pages/LoginPage/PasswordResetPage";
import ChangePasswordPage from "./pages/LoginPage/ChangePasswordPage";
import SendEmailSuccess from "./pages/LoginPage/SendEmailSuccess";
import FriendPage from "./pages/FriendPage/FriendPage";
import MessagePage from "./pages/MessagePage/MessagePage";
import registerServiceWorker from "./config/registerServiceWorker";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SettingProfilePage from "./pages/ProfilePage/SettingProfilePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
// document.body.style.overflow = "hidden";
root.render(
  <WebSocketProvider>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<LoginPage />} path="/login" />
          <Route element={<SignUpPage />} path="/signup" />
          <Route element={<PasswordResetPage />} path="/forget-password" />
          <Route element={<ChangePasswordPage />} path="/reset-password" />
          <Route element={<SendEmailSuccess />} path="/send-mail-success" />
          <Route element={<PrivateRouter />}>
            <Route element={<FriendPage />} path="/friend" />
            <Route element={<ProfilePage />} path="/profile" />
            <Route element={<VideoCallPage />} path="/video-call" />
            <Route element={<MessagePage />} path="/" />
            <Route path="*" element={<Navigate to="/errorpage" />} />{" "}
            <Route element={<SettingProfilePage />} path="/profile-setting" />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </WebSocketProvider>
);
registerServiceWorker();
reportWebVitals();
