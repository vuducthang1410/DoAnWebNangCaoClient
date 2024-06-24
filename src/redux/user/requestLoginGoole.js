import axios from "axios";
import { url } from "../../utils";

export default function requestLoginGoogle(data){
    return axios.request({
        method:'POST',
        url:url.url_login_google,
        params:data
    })
}