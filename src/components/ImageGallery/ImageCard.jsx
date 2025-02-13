const ImageCard = ({ item }) => {
  return (
    <div>
      {/* {console.log(item)} */}
      <li>
        <a href={item.urls.regular} rel="noopener noreferrer">
          <img src={item.urls.small} alt={item.alt_description} />
        </a>
      </li>
    </div>
  );
};

export default ImageCard;
