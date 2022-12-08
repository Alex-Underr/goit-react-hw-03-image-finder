import styles from './modal.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  backDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={styles.overlay} onClick={this.backDropClick}>
        <div className={styles.modal}>
          <img src="" alt="" />
          {this.props.children}
          Модалка
        </div>
      </div>
    );
  }
}
Component.propType = {
  children: PropTypes.element.isRequired,
};
