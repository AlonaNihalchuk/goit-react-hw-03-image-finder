import React, { Component } from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component {
  state = {
    picture: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pictureName !== this.props.pictureName) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.pictureName}&page=1&key=22623319-52f49cc6bb6df63b12d71d4de&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((res) => res.json())
        .then((picture) => this.setState({ picture }))
        .finally(() => this.setState({ loading: true }));
    }
  }
  render() {
    console.log(this.state.picture);
    return (
      <ul className={styles.ImageGallery}>
        {this.state.picture &&
          this.state.picture.hits.map((hit) => (
            <ImageGalleryItem hit={hit} key={hit.id} />
          ))}

        {/* <li>{this.props.pictureName}</li> */}
      </ul>
    );
  }
}
export default ImageGallery;
