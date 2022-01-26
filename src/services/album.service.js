import {axiosService} from './axios.service';
import {urls} from '../configs/urls';

export const albumService = {
    getAll: () => axiosService.get(urls.albums).then(value => value.data),
    getByUserId: (userId) => axiosService.get(`${urls.users}/${userId}/albums`).then(value => value.data)
};
