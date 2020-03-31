import { service } from '../services/request';

export function list(data) {
    return service({
        url: 'api/devices/search',
        method: 'post',
        data
    });
}