import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchTrandMoviesById } from "../../services/api";
import s from "./MovieDeatailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const [goBackUrl, setGoBackUrl] = useState(location.state?.from ?? "/movies");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchTrandMoviesById(movieId);
        setMovie(data);
      } catch (error) {
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <p className={s.error}>{error}</p>;

  return (
    <div className={s.section}>
      <NavLink className={s.back} to={goBackUrl}>
        {" "}
        Go Back{" "}
      </NavLink>
      <div className={s.filmInfo}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`movie.title`}
          width={300}
        />
        <ul>
          <li className={s.item}>
            <h2 className={s.title}>{movie.title}</h2>
            <p>Vote avarage: {movie.vote_average}</p>
          </li>
          <li className={s.item}>
            <h3 className={s.categories}>Overview</h3>
            <p>{movie.overview}</p>
          </li>
          <li className={s.item}>
            <h3 className={s.categories}>Genres</h3>
            <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
          </li>
        </ul>
      </div>
      <p className={s.addInf}>Additional iformation</p>
      <nav className={s.movieNav}>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
