import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ setPage }) => {
  return (
    <div className={s.wrapper}>
      <button
        className={s.btn}
        onClick={() => setPage((prev) => prev + 1)}
        type="button"
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
