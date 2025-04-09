const API_KEY = "1812f941d2e0949d8628a8eec572b561";
const BASE_URL = "https://api.themoviedb.org/3";

// fetch popular from api

export const fetchPopularMovies = async ( ) => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}

// search movie with query

export const searchMovie = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = response.json()
    return data.results
}