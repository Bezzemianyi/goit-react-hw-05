import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastMoviesById } from "../../services/api";
import s from "./MovieCast.module.css";
const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { cast } = await fetchCastMoviesById(movieId);
      setCast(cast);
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map((item) => (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.original_name}
              width={150}
              className={s.img}
            />
            <p className={s.name}>{item.original_name}</p>
            <p className={s.char}>{item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
