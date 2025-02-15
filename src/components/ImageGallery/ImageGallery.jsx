import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <div>
      <ul className={s.list}>
        {photos.map((item) => (
          <ImageCard key={item.id} item={item} onImageClick={onImageClick} />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
