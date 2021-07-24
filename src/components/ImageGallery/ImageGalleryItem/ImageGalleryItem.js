import React, { Component } from "react";
class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="ImageGalleryItem" key={this.props.hit.id}>
        <img
          src={this.props.hit.largeImageURL}
          alt={this.props.hit.tags}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}
export default ImageGalleryItem;
