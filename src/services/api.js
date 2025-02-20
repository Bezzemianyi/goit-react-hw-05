import axios from 'axios';
const MY_ACCESS_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTVhNjY5ODkyNTVkMzE2ODZkOTU2MmZmN2IwNjQ3ZSIsIm5iZiI6MTc0MDA0ODM1My4yMDYsInN1YiI6IjY3YjcwN2UxMGM2MTAyNWZhZmMzZmFiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WGUNDMUw7BPXPAPi-V9uUpeySZAnCcTICl7p_2fTFvg"

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const options = {
  headers: {
    Authorization: `Bearer ${MY_ACCESS_KEY}`,
  },
};
export const fetchTrandMovies = async () => {
    const response = await axios.get(`/trending/movie/week`, options);
    return response.data
}

export const fetchTrandMoviesById = async movieId => {
    const response = await axios.get(`/movie/${movieId}`, options);
    return response.data
}