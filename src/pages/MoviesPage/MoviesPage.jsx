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
const MoviesPage = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const query = searchParams.get("query");
  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      try {
        const { results } = await fetchSearchMovies(query);
        setSearchMovie(results);
      } catch (error) {
        console.error(error);
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
      <ul className={s.list}>
        {searchMovie.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
