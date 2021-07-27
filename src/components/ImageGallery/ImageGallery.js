// import React, { Component } from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
// import Modal2 from "../Modal2/Modal2";

// class ImageGallery extends Component {
//   state = {
//     picture: null,
//     loading: false,
//     error: null,

//     showModal: false,
//     largeImg: "",
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.pictureName !== this.props.pictureName) {
//       this.setState({
//         loading: true,
//         picture: null,
//       });
//       fetch(
//         `https://pixabay.com/api/?q=${this.props.pictureName}&page=1&key=22623319-52f49cc6bb6df63b12d71d4de&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         .then((response) => {
//           if (response.ok) {
//             return response.json();
//           }
//           return Promise.reject(new Error("there is no such a picture"));
//         })
//         .then((picture) => this.setState({ picture }))
//         .catch((error) => this.setState({ error }))
//         .finally(() => this.setState({ loading: false }));
//     }
//   }

//   // что это?
//   // toggleModal = (largeImg) => {
//   //   this.setState({ largeImg: largeImg });
//   //   this.setState(({ showModal }) => ({ showModal: !showModal }));
//   // };

//   render() {
//     return (
//       <>
//         <ul className={styles.ImageGallery}>
//           {this.state.picture &&
//             this.state.picture.hits.map((hit) => (
//               <ImageGalleryItem
//                 hit={hit}
//                 key={hit.id}
//                 onClick={this.props.onClick}
//               />
//             ))}
//           {/* <li>{this.props.pictureName}</li> */}
//         </ul>
//         {/* {this.state.showModal && (
//           <Modal2 onClose={this.toggleModal} bigImg={this.state.largeImg} />
//         )} */}

//         {this.state.error && <p>{this.state.error.message}</p>}
//       </>
//     );
//   }
// }
// export default ImageGallery;

const ImageGallery = ({ picture, onClick, error }) => {
  return (
    <>
      <ul className={styles.ImageGallery}>
        {picture &&
          picture.hits.map((hit) => (
            <ImageGalleryItem hit={hit} key={hit.id} onClick={onClick} />
          ))}
      </ul>
      {/* {this.state.showModal && (
          <Modal2 onClose={this.toggleModal} bigImg={this.state.largeImg} />
        )} */}

      {error && <p>{error.message}</p>}
    </>
  );
};
export default ImageGallery;
