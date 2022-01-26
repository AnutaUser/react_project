import {axiosService} from './axios.service';

import {urls} from '../configs/urls';

export const photoService = {
    getAll: () => axiosService.get(urls.photos).then(value => value.data),
    getByAlbumId: (albumId) => axiosService.get(`${urls.albums}/${albumId}/albums`).then(value => value.data)
}