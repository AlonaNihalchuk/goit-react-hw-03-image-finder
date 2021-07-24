import React, { Component } from "react";
import styles from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={styles.ImageGalleryItem} key={this.props.hit.id}>
        <img
          src={this.props.hit.webformatURL}
          alt={this.props.hit.tags}
          className={styles.ImageGalleryItemImage}
        />
      </li>
    );
  }
}
export default ImageGalleryItem;
