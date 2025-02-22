import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsMoviesById } from "../../services/api";
import s from "./MovieReviews.module.css";
const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { results } = await fetchReviewsMoviesById(movieId);
        setReviews(results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : reviews.length > 0 ? (
        <ul>
          {reviews.map((item) => (
            <li className={s.item} key={item.id}>
              <h3 className={s.author}>Author: {item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>"We don’t have any reviews for this movie"</p>
      )}
    </div>
  );
};

export default MovieReviews;
