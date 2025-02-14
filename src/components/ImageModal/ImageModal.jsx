import Modal from "react-modal";
import { useEffect } from "react";
import s from "./ImageModal.module.css";
Modal.setAppElement("#root"); // Уникає помилок при доступності

const ImageModal = ({ isOpen, onClose, imageUrl, alt }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modalContent}
      overlayClassName={s.modalOverlay}
    >
      <div className={s.modalWrapper} onClick={onClose}>
        <img src={imageUrl} alt={alt} onClick={(e) => e.stopPropagation()} />
      </div>
    </Modal>
  );
};

export default ImageModal;
