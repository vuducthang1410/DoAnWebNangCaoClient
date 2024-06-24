// WebSocketContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import WebSocketService from '../redux/websocket/websocketService';

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
  const [websocket, setWebsocket] = useState(null);

  // Function để khởi tạo WebSocketService và lưu vào context
  const initializeWebSocket =async (url, accessToken) => {
    const ws = new WebSocketService(url, accessToken);
    ws.connect()
      .then(wsInstance => {
        setWebsocket(wsInstance);
      })
      .catch(error => {
        console.error('WebSocket connection failed:', error);
      });
  };
  useEffect(() => {
    if (websocket) {
      console.log('WebSocket connected');
    }
  }, [websocket]);
  return (
    <WebSocketContext.Provider value={{ websocket, initializeWebSocket }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => useContext(WebSocketContext);

export default WebSocketContext;
