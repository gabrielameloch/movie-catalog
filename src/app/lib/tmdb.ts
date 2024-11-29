import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    language: "en-US",
  },
});

export async function fetchPopularMovies() {
  const response = await api.get("/movie/popular");
  return response.data.results;
}

export async function fetchMovieDetails(id: string) {
  const response = await api.get(`/movie/${id}`);
  return response.data;
}
