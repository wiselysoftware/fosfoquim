import { service } from '../services/request';

export function login(data) {
    return service({
        url: 'api/user/login',
        method: 'post',
        data
    });
}

export function register(data) {
    return service({
        url: 'api/user/register',
        method: 'post',
        data
    });
}