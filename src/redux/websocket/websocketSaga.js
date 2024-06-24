import { takeEvery, put } from "redux-saga/effects";
import WebSocketService from "./websocketService";
import {
  setWebSocketClient,
  websocketConnected,
  websocketDisconnected,
  websocketError,
} from "./websocketSlide";

function* handleWebSocketConnect(action) {
  console.log("websocket saga", action);
  if (action.payload===undefined) return;
  const { url, accessToken } = action.payload;
  try {
    const client = new WebSocketService(url, accessToken);
    yield put(setWebSocketClient(client));
    yield put(websocketConnected());
  } catch (error) {
    yield put(websocketError(error.message));
  }
}

function* handleWebSocketDisconnect() {
  yield put(websocketDisconnected());
}

export default function* websocketSaga() {
  yield takeEvery(websocketConnected.type, handleWebSocketConnect);
  yield takeEvery(websocketDisconnected.type, handleWebSocketDisconnect);
}
