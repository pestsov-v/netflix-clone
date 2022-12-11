const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
    TRENDING: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    NETFLIX_ORIGINALS: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
    TOP_RATED: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    ACTION_MOVIES: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    COMEDY_MOVIES: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    HORROR_MOVIES: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    ROMANCE_MOVIES: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    DOCUMENTARIES: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
}

export default requests