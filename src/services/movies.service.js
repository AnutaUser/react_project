import {axiosServices} from "./axios.services";

import {urls} from "../configs/urls";

export const moviesService = {
    getAll: () => axiosServices.get(urls.movies).then(value => value.data),
    getById: (id) => axiosServices.get(`${urls.movies}/${id}`).then(value => value.data)
}