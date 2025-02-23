import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";
const MovieList = ({ movies, location }) => {
  return (
    <div>
      <ul className={s.list}>
        {movies.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} state={location}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
