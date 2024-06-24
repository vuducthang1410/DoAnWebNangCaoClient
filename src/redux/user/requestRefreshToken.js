import axios from "axios";
import { url } from "../../utils";

export default async function requestRefreshToken(data){
    return await axios.request({
        method: "post",
        url: url.url_refresh_token,
        withCredentials: true,
      });
}