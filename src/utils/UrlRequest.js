const url="http://localhost:8080"
export default{
    url_sign_up:url+"/auth/signUp",
    url_login:url+"/auth/signIn",
    url_get_google_url:url+'/auth/url-login/GOOGLE',
    url_login_google:url+'/auth/sign-in-with-google',
    url_websocket:'ws://localhost:8080/ws?Authorization=Bearer ',
    url_forget_password:url+'/auth/forget-password',
    url_reset_password:url+'/auth/reset-password',
    url_get_profile:url+'/api/get-profile',
    url_refresh_token:url+'/auth/refresh-token'
}