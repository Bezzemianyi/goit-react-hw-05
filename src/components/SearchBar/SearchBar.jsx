import { useState } from "react";

const SearchBar = ({ handleSetSearch }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSetSearch(value);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
