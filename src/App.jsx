import { useEffect } from "react";
import { fetchGallery } from "./services/api";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import s from "./App.module.css";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      if (!search) return;
      try {
        setIsLoad(true);
        setError(null);
        const { results } = await fetchGallery(search, page);
        setPhotos((prevPhotos) =>
          page === 1 ? results : [...prevPhotos, ...results]
        );
      } catch {
        setError("Can't connect to the server...");
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
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery photos={photos} onImageClick={setSelectedImage} />
          {photos.length > 0 && <LoadMoreBtn setPage={setPage} />}
        </>
      )}
      {isLoad && <Loader />}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageUrl={selectedImage.urls.regular}
          alt={selectedImage.alt_description}
        />
      )}
    </div>
  );
};
export default App;
