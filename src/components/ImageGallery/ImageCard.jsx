import ImageModal from "../ImageModal/ImageModal";
import { useState } from "react";
import s from "./ImageCard.module.css";
const ImageCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <li className={s.item}>
        <img
          src={item.urls.small}
          alt={item.alt_description}
          onClick={() => setIsModalOpen(true)}
          style={{ cursor: "pointer" }}
        />
      </li>
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={item.urls.regular}
        alt={item.alt_description}
      />
    </div>
  );
};

export default ImageCard;
