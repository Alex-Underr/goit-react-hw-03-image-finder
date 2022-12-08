// import styles from './app.module.css';
// import PropTypes from 'prop-types';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
export class App extends Component {
  state = {
    modalShow: false,
  };

  toggleModal = () => {
    this.setState(({ modalShow }) => ({
      modalShow: !modalShow,
    }));
  };

  render() {
    const { modalShow } = this.state;
    return (
      <div>
        <Searchbar />
        {modalShow && <Modal onClose={this.toggleModal}></Modal>}
        <ImageGallery />
        <ImageGalleryItem onClick={this.toggleModal} />
        <Button />
        <Loader />
      </div>
    );
  }
}
