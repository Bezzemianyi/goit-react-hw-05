import { useState } from "react";
import s from "./ImageCard.module.css";
const ImageCard = ({ item, onImageClick }) => {
  return (
    <div>
      <li className={s.item}>
        <img
          src={item.urls.small}
          alt={item.alt_description}
          onClick={() => onImageClick(item)}
          style={{ cursor: "pointer" }}
        />
      </li>
    </div>
  );
};

export default ImageCard;
