import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
const SearchBar = ({ handleSetSearch }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSetSearch(value);
    if (!value) {
      toast("Enter the text", {
        position: "top-right",
      });
    }
    setValue("");
  };
  return (
    <div className={s.SearchSection}>
      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
