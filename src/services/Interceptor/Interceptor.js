import axios from "axios";
import { url } from "../../utils";
import store from "../../redux/configureStore";
import { refreshToken } from "../../redux/user/authSlide";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      console.log("Access token request", accessToken);
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("success :", response);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.request({
          method: "post",
          url: url.url_refresh_token,
          withCredentials: true,
        });
        console.log("response refreshToken", response.data.data.accessToken);
        localStorage.setItem("accessToken", response.data.data.accessToken);
        store.dispatch(refreshToken(response.data.data.accessToken));
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.data.accessToken;
        return axiosInstance(originalRequest);
      } catch (error) {
        console.log("refesh token error", error);
      }
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
