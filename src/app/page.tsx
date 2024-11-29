import { fetchPopularMovies } from "@/app/lib/tmdb";
import MovieCard from "@/app/components/movieCard";
import { Key } from "react";
import { Movie } from "./types/movie";

export default async function HomePage() {
  const movies = await fetchPopularMovies();

  return (
    <div>
      <h2>Popular Movies</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
