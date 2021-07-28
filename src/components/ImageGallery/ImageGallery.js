import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ picture, onClick, error }) => {
  return (
    <>
      <ul className={styles.ImageGallery}>
        {picture &&
          picture.hits.map((hit) => (
            <ImageGalleryItem hit={hit} key={hit.id} onClick={onClick} />
          ))}
      </ul>
      {error && <p>{error.message}</p>}
    </>
  );
};

// IconButton.defaultProps = {
//   onClick: () => null,
//   children: null,
// };

// IconButton.propTypes = {
//   onClick: PropTypes.func,
//   children: PropTypes.node,
//   "aria-label": PropTypes.string.isRequired,
// };

ImageGallery.defaultProps = {
  picture: null,
  error: null,
  hit: null,
  id: null,
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,

  picture: PropTypes.object,
  hit: PropTypes.object,
  id: PropTypes.number,
  error: PropTypes.string,
};

export default ImageGallery;
