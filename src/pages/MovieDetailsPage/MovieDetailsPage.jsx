import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchTrandMoviesById } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchTrandMoviesById(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);
  if (!movie) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {/* MovieDetailsPage #{movieId} */}
      {/* {console.log(movie)} */}
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`movie.title`}
          width={300}
        />
        <ul>
          <li>
            <h2>{movie.title}</h2>
            <p>Vote avarage: {movie.vote_average}</p>
          </li>
          <li>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </li>
          <li>
            <h3>Genres</h3>
            <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
          </li>
        </ul>
      </div>
      <p>Additional iformation</p>
      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
