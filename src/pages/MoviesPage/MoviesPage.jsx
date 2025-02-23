import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { fetchSearchMovies } from "../../services/api";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import s from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";
const MoviesPage = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const query = searchParams.get("query");
  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const { results } = await fetchSearchMovies(query);
        setSearchMovie(results);
      } catch (error) {
        setError("Something went wrong! Try again later.");
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [query]);
  const onSubmit = async (values, { resetForm }) => {
    const newQuery = values.query.trim();
    if (!newQuery) return;

    try {
      const { results } = await fetchSearchMovies(newQuery);
      setSearchMovie(results);
      setSearchParams({ query: newQuery });
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const initialValues = {
    query: "",
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field className={s.input} name="query" />
          <button className={s.btn} type="submit">
            {" "}
            Search
          </button>
        </Form>
      </Formik>
      {loading && <p>Loading...</p>}
      {error && <p className={s.error}>{error}</p>}

      {!loading && !error && searchMovie.length > 0 && (
        <MovieList movies={searchMovie} location={location} />
      )}
    </div>
  );
};

export default MoviesPage;
