import {axiosServices} from "./axios.services";

import urls, {genresURL} from "../configs/urls";

export const genresService = {
    getAll: () => axiosServices.get(`${urls.genres}${genresURL}`).then(value => value.data),
}