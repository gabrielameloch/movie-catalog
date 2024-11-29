import Link from "next/link";
import { Movie } from "@/app/types/movie";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <Link href={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ width: "100%" }}
        />
      </Link>
      <h3>{movie.title}</h3>
    </div>
  );
}
