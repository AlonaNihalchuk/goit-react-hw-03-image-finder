import React, { Component } from "react";
import styles from "./Modal2.module.css";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export default class Modal2 extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      console.log(e.code);
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>
          <img src={this.props.bigImg} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
