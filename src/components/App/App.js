import React from "react";
import Loader from "react-loader-spinner";
import styles from "./App.module.css";
import Modal2 from "../Modal2/Modal2";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";

class App extends React.Component {
  state = {
    picture: null,
    error: null,
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

  componentDidUpdate(prevProps, prevState) {
    const API_KEY = "22623319-52f49cc6bb6df63b12d71d4de";
    const BASE_URL = "https://pixabay.com/api/?";
    const { pictureName, page } = this.state;

    if (pictureName !== prevState.pictureName || page !== prevState.page) {
      this.setState({
        loading: true,
        picture: null,
      });

      fetch(
        `${BASE_URL}q=${this.state.pictureName}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
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
    const {
      picture,
      error,
      pictureName,
      loading,
      showButton,
      showModal,
      largeImg,
    } = this.state;

    return (
      <section className={styles.phonebook}>
        <Searchbar onSubmit={this.handlePictureNameSubmit} picture={picture} />
        <ImageGallery
          picture={picture}
          error={error}
          pictureName={pictureName}
          onClick={this.toggleModal}
        />
        {loading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {showButton && <Button onClick={this.loadMore} />}
        {showModal && (
          <Modal2
            onClose={this.toggleModal}
            bigImg={largeImg}
            pictureName={pictureName}
          />
        )}
      </section>
    );
  }
}

export default App;
