import axios from "axios";
import { url } from "../../utils";

export default function requestLogin(data){
    data={
        username:'vdt14102003',
        password:'12345678'
    }
    return axios.request({
        method:'POST',
        url:url.url_login,
        data:data
    })
}