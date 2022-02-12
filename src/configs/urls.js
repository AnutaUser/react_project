const baseURL = 'https://api.themoviedb.org/3';

export const baseImgURL = 'https://image.tmbd.org/t/p/w400';

export const pageURL = '&page=';

export const genresURL = '&with_genres='

export const urls = {
    movies: `/discover/movie?api_key=${process.env.REACT_APP_WEATHER_API_KEY}`,
    movie: `/movie?api_key=${process.env.REACT_APP_WEATHER_API_KEY}`,
    genres: `/genre/movie/list?api_key=${process.env.REACT_APP_WEATHER_API_KEY}`
}

export default baseURL;

