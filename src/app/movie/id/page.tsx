import { fetchMovieDetails } from "@/app/lib/tmdb";

interface MoviePageProps {
  params: { id: string };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const movie = await fetchMovieDetails(params.id);

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ maxWidth: "300px" }}
      />
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
}
