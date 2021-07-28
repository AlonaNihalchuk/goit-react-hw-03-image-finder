import React, { Component } from "react";
import styles from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

class ImageGalleryItem extends Component {
  static defaultProps = { webformatURL: null, tags: null };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
  };

  render() {
    const { largeImageURL, webformatURL, tags } = this.props.hit;
    return (
      <li
        className={styles.ImageGalleryItem}
        onClick={() => this.props.onClick(largeImageURL)}
      >
        <img
          src={webformatURL}
          alt={tags}
          className={styles.ImageGalleryItemImage}
        />
      </li>
    );
  }
}
export default ImageGalleryItem;
