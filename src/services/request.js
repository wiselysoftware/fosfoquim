import axios from 'axios'
import Cookies from "js-cookie";

const service = axios.create({
    timeout: 8000
});

const TokenKey = 'Token';

service.interceptors.request.use(config => {
    config.headers['Accept'] = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    let token = Cookies.get(TokenKey);

    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
});

service.interceptors.response.use(
    response => response,
    error => {
        console.log('err' + error)
        return Promise.reject(error.response)
    }
);

export { service };
