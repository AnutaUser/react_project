import {axiosServices} from "./axios.services";

import urls from "../configs/urls";

export const genresService = {
    getAll: () => axiosServices.get(urls.genres).then(value => value.data.results),
    getById: (id) => axiosServices.get(`${urls.genres}/${id}`).then(value => value.data.results)
}