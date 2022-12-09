import { createPortal } from 'react-dom';

import styles from './modal.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  backDropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={styles.overlay} onClick={this.backDropClick}>
        <div className={styles.modal}>
          <img src="" alt="" />
          {this.props.children}
          Модалка
        </div>
      </div>,
      modalRoot
    );
  }
}
