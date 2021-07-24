import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    pictureName: "",
  };

  handlePictureNameChange = (e) => {
    this.setState({
      pictureName: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.pictureName.trim() === "") {
      alert("введите слово");
      return;
    }
    this.props.onSubmit(this.state.pictureName);
    this.setState({ pictureName: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handlePictureNameChange}
            className="SearchForm-input"
            value={this.state.pictureName}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
