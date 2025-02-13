import { useEffect } from "react";
import { fetchGallery } from "./services/api";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        if (!search) return;
        setIsError(false);
        const data = await fetchGallery(search);
        setPhotos(data);
      } catch {
        setIsError(true);
      }
    };
    getData();
  }, [search]);
  const handleSetSearch = (newSearch) => {
    console.log(newSearch);
    setSearch(newSearch);
  };
  return (
    <div>
      <SearchBar handleSetSearch={handleSetSearch} />
      <ImageGallery photos={photos} />
      {isError && <h2>Something went wrong !</h2>}
    </div>
  );
};
export default App;
