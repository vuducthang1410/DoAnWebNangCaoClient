import { Client } from "@stomp/stompjs";

class WebSocketService {
  constructor(url, accessToken) {
    this.stompClient = null;
    this.stompConfig = {
      brokerURL: url + accessToken,
      connectHeaders: {},
      forceBinaryWSFrames: true,
      appendMissingNULLonIncoming: true,
      debug: function (str) {
        console.log('STOMP: ' + str);
      },
      reconnectDelay: 5000,
      onConnect: frame => {
        console.log('WebSocket connected');
        this.onConnectCallback(); // Gọi callback khi kết nối thành công
      },
      onStompError: frame => {
        console.log('WebSocket error: ' + frame.body);
      },
    };

    this.connectPromise = null; // Khởi tạo promise
    this.initializeWebSocket();
  }

  initializeWebSocket() {
    this.stompClient = new Client(this.stompConfig);
    this.stompClient.activate(); // Kích hoạt kết nối WebSocket

    // Thiết lập promise để theo dõi khi nào kết nối thành công
    this.connectPromise = new Promise((resolve, reject) => {
      this.onConnectCallback = () => resolve(this); // Resolve promise khi kết nối thành công
      this.stompClient.onStompError = error => reject(error); // Reject promise nếu có lỗi kết nối
    });
  }

  // Phương thức để gửi tin nhắn
  sendComment(message) {
    if (this.stompClient && this.stompClient.connected) {
      this.stompClient.publish({
        destination: '/app/test',
        body: JSON.stringify(message),
      });
    } else {
      console.error('STOMP: There is no underlying STOMP connection');
      // Xử lý tái kết nối hoặc hiển thị thông báo lỗi
    }
  }

  // Phương thức để subscribe tin nhắn
  subscribeToComment(user, callback) {
    if (this.stompClient && this.stompClient.connected) {
      this.stompClient.subscribe(`/user/${user.userId}/comment`, message => {
        const data = JSON.parse(message.body);
        callback(data);
      });
    } else {
      console.error('STOMP: There is no underlying STOMP connection');
      // Xử lý tái kết nối hoặc hiển thị thông báo lỗi
    }
  }

  // Hàm này trả về promise để theo dõi kết nối
  connect() {
    return this.connectPromise;
  }
}

export default WebSocketService;
