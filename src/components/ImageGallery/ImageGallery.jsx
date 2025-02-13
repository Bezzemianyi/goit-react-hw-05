import ImageCard from "./ImageCard";

const ImageGallery = ({ photos }) => {
  return (
    <div>
      <ul>
        {photos.map((item) => (
          <ImageCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
