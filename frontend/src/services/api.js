const API_KEY = "find_your_own_key";
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
    const data = await response.json()
    return data.results
}