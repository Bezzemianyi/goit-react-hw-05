import { useEffect } from "react";
import { fetchGallery } from "./services/api";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import toast from "react-hot-toast";
import s from "./App.module.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    const getData = async () => {
      if (!search) return;
      try {
        setIsLoad(true);
        const { results } = await fetchGallery(search, page);
        setPhotos((prevPhotos) =>
          page === 1 ? results : [...prevPhotos, ...results]
        );
      } catch {
        toast.error("Сan't connect to the server...", {
          position: "top-right",
        });
      } finally {
        setIsLoad(false);
      }
    };
    getData();
  }, [search, page]);
  const handleSetSearch = (newSearch) => {
    console.log(newSearch);
    setSearch(newSearch);
    setPage(1);
  };
  return (
    <div>
      <SearchBar handleSetSearch={handleSetSearch} />
      <ImageGallery photos={photos} />
      {photos.length ? <LoadMoreBtn setPage={setPage} /> : ""}
      {isLoad && <Loader />}
    </div>
  );
};
export default App;
