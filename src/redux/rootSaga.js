import { all, fork } from "redux-saga/effects";
import authSaga from "./user/saga";
import websocketSaga from "./websocket/websocketSaga";
import profileSaga from "./profile/saga";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(websocketSaga), fork(profileSaga)]);
}
