import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ picture, hits, onClick, error }) => {
  return (
    <>
      <ul className={styles.ImageGallery}>
        {picture &&
          hits.map((hit) => (
            <ImageGalleryItem
              hit={hit}
              key={hit.id}
              onClick={onClick}
              webformatURL={hit.webformatURL}
              largeImageURL={hit.largeImageURL}
              tags={hit.tags}
            />
          ))}
      </ul>
      {error && <p>{error.message}</p>}
    </>
  );
};

ImageGallery.defaultProps = {
  picture: null,
  error: null,
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,

  picture: PropTypes.object,
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    }).isRequired
  ).isRequired,
  error: PropTypes.string,
};

export default ImageGallery;
