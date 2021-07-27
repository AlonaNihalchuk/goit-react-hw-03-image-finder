import React from "react";
import Loader from "react-loader-spinner";

import styles from "./App.module.css";
// import Modal from "../Modal/Modal";
import Modal2 from "../Modal2/Modal2";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";

class App extends React.Component {
  state = {
    picture: null,
    error: null,

    // showModal: false,
    pictureName: "",
    loading: false,
    showModal: false,
    largeImg: "",
    page: 1,
    showButton: false,
  };

  toggleModal = (largeImg) => {
    this.setState({ largeImg: largeImg });
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  // componentDidMount() {
  //   this.setState({ loading: true });
  //   // this.fetchImg();
  //   //  fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(res => res.json()).then(console.log)
  // }

  // fetchImg = (pictureName, page) => {
  //   fetch(
  //     `https://pixabay.com/api/?q=${pictureName}&page=${page}&key=22623319-52f49cc6bb6df63b12d71d4de&image_type=photo&orientation=horizontal&per_page=12`
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       return Promise.reject(new Error("there is no such a picture"));
  //     })
  //     .then((picture) => this.setState({ picture }))
  //     .catch((error) => this.setState({ error }))
  //     .finally(() => this.setState({ loading: false }));
  // };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.pictureName !== prevState.pictureName ||
      this.state.page !== prevState.page
    ) {
      this.setState({
        loading: true,
        // picture: null,
      });
      // this.fetchImg();
      fetch(
        `https://pixabay.com/api/?q=${this.state.pictureName}&page=${this.state.page}&key=22623319-52f49cc6bb6df63b12d71d4de&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error("there is no such a picture"));
        })
        .then((picture) => this.setState({ picture }))
        .then(this.showButton())
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
  handlePictureNameSubmit = (pictureName) => {
    this.setState({ pictureName });
  };

  loadMore = (e) => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
    this.showButton();
  };

  showButton = () => {
    this.setState(({ showButton }) => ({ showButton: !showButton }));
  };

  render() {
    // const { showModal } = this.state;
    return (
      <section className={styles.phonebook}>
        {/* {this.state.picture && (<div>HI HI HI</div>)} */}

        <Searchbar onSubmit={this.handlePictureNameSubmit} />
        <ImageGallery
          picture={this.state.picture}
          error={this.state.error}
          pictureName={this.state.pictureName}
          onClick={this.toggleModal}
        />
        {this.state.loading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {this.state.showButton && <Button onClick={this.loadMore} />}

        {/* <Modal2 /> */}

        {/* <button type="button" onClick={this.toggleModal}>
          open
        </button> */}
        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <p>Это текст модалки</p>
            <button type="button" onClick={this.toggleModal}>
              close
            </button>
          </Modal>
        )} */}
        {this.state.showModal && (
          <Modal2 onClose={this.toggleModal} bigImg={this.state.largeImg} />
        )}
      </section>
    );
  }
}

export default App;
// my pixabayKey
// 22623319-52f49cc6bb6df63b12d71d4de
