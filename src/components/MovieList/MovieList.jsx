import { useEffect, useState } from "react";
import { fetchTrandMovies } from "../../services/api";
import { NavLink, Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
