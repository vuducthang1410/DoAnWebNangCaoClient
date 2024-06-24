import { createSlice } from '@reduxjs/toolkit';

const websocketSlice = createSlice({
  name: 'websocket',
  initialState: {
    client: null,
    isConnected: false,
    error: null,
  },
  reducers: {
    setWebSocketClient: (state, {payload}) => ({
      client:payload
    }),
    websocketConnected: (state) => {
      state.isConnected = true;
    },
    websocketDisconnected: (state) => {
      state.isConnected = false;
      state.client = null;
    },
    websocketError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setWebSocketClient,
  websocketConnected,
  websocketDisconnected,
  websocketError,
} = websocketSlice.actions;

export default websocketSlice.reducer;
