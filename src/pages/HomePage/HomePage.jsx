import { useEffect, useState } from "react";
import { fetchTrandMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { results } = await fetchTrandMovies();
      setMovies(results);
    };
    getData();
  }, []);
  return (
    <div>
      <h2 className={s.title}>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
