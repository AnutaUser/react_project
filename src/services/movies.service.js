import {axiosServices} from "./axios.services";

import {genresURL, pageURL, urls} from "../configs";

export const moviesService = {
    getAll: () => axiosServices.get(urls.movies).then(value => value.data.results),
    getById: (id) => axiosServices.get(`${urls.movies}/${id}`).then(value => value.data),
    getByPage: (page) => axiosServices.get(`${urls.movies}${pageURL}${page}`).then(value => value.data),
    getByGenresId: (page, genreId) => axiosServices.get(`${urls.movies}${pageURL}${page}${genresURL}${genreId}`).then(value => value.data.results)
}