import styles from './app.module.css';
// import PropTypes from 'prop-types';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
// import { imagesAPI } from './imagesAPI';

export class App extends Component {
  state = {
    modalShow: false,
    request: '',
  };

  toggleModal = () => {
    this.setState(({ modalShow }) => ({
      modalShow: !modalShow,
    }));
  };
  searchBarSubmit = request => {
    this.setState({ request });
  };
  render() {
    const { modalShow } = this.state;
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.searchBarSubmit} />
        {modalShow && <Modal onClose={this.toggleModal}></Modal>}
        <ImageGallery />
        <ImageGalleryItem request={this.state.request} />

        {/* <Loader /> */}
      </div>
    );
  }
}
