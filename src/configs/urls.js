const baseURL = 'https://developers.themoviedb.org/3'

export const urls = {
    movies: `/discover/movie?api_key=${process.env.REACT_APP_WEATHER_API_KEY}`,
    genres: `/genre/movie/list?api_key=${process.env.REACT_APP_WEATHER_API_KEY}`
}

export default baseURL;
