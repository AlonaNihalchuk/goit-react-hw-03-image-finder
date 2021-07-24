import React from "react";
import Loader from "react-loader-spinner";

import styles from "./App.module.css";
import Modal from "../Modal/Modal";
import Modal2 from "../Modal2/Modal2";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";

class App extends React.Component {
  state = {
    // showModal: false,
    pictureName: "",
    loading: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  componentDidMount() {
    this.setState({ loading: true });
    //  fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(res => res.json()).then(console.log)
  }

  handlePictureNameSubmit = (pictureName) => {
    this.setState({ pictureName });
  };
  render() {
    const { showModal } = this.state;
    return (
      <section className={styles.phonebook}>
        {/* {this.state.picture && (<div>HI HI HI</div>)} */}
        {this.state.loading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        <Searchbar onSubmit={this.handlePictureNameSubmit} />
        <ImageGallery pictureName={this.state.pictureName} />
        <Button />
        <Modal2 />

        <button type="button" onClick={this.toggleModal}>
          open
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <p>Это текст модалки</p>
            <button type="button" onClick={this.toggleModal}>
              close
            </button>
          </Modal>
        )}
      </section>
    );
  }
}

export default App;
// my pixabayKey
// 22623319-52f49cc6bb6df63b12d71d4de
