import React, { Component } from "react";
import styles from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  render() {
    const { largeImageURL, webformatURL, tags } = this.props;

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
