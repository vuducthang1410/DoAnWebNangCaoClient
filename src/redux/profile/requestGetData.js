import axiosInstance from "../../services/Interceptor/Interceptor";
import { url } from "../../utils";
export default async function requestGetPeofile(data) {
  return axiosInstance.get(url.url_get_profile + `?id=${data}`);
}
