import React, { Component } from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  //   componentDidMount() {
  //     console.log('Modal componentDidMount');
  //     window.addEventListener('keydown', this.handleKeyDown);
  //   }

  //   componentWillUnmount() {
  //     console.log('Modal componentWillUnmount');
  //     window.removeEventListener('keydown', this.handleKeyDown);
  //   }

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
      <div
        className={styles.Modal__backdrop}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.Modal__content}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
