import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastMoviesById } from "../../services/api";

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
            />
            <p>{item.original_name}</p>
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
