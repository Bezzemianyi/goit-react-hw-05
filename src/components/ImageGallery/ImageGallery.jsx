import ImageCard from "./ImageCard";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ photos }) => {
  return (
    <div>
      <ul className={s.list}>
        {photos.map((item) => (
          <ImageCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
