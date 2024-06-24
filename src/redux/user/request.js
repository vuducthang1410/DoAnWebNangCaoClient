import axios from "axios";
import { url } from "../../utils";

export default async function requestLogin(data){
    console.log("request",data)
    return await axios.request({
        method: 'POST',
        url: url.url_login,
        data: data,
        withCredentials:true
    }).then(response => {
        return response;
    }).catch(error => {
        if (error.response) {
            // Server responded with a status code outside of 2xx range
            console.log("first");
        } else {
            // Something happened in setting up the request that triggered an error
            console.log("second");
        }
        // Return a resolved promise to suppress unhandled promise rejection warning
        return Promise.resolve(); // You can modify this to return something meaningful
    });
}