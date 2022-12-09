import styles from './imageGallery.module.css';
// import { imagesAPI } from './imagesAPI';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
// import PropTypes from 'prop-types';
import { Component } from 'react';
import Loader from '../Loader/Loader';
export default class ImageGallery extends Component {
  state = {
    imageData: null,
    page: 1,
    loading: false,
    error: null,
    arrayData: [],
    button: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      `https://pixabay.com/api/?q=${this.state.imageData}&page=${this.state.page}&key=31176122-470dd6c20579d2a67d5e2ecc1&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(imageData => this.setState({ imageData }))
      .then(img => {
        if (img.hits.length <= 12) {
          this.setState({ button: false });
        }
        this.setState({ button: true });
        return this.setState({
          arrayData: [...this.state.arrayData, ...img.hits],
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }
  showImg = (largeImageURL, id) => {
    this.props.onClick(largeImageURL, id);
  };

  render() {
    return (
      <ul className={styles.gallery}>
        {this.state.loading && <Loader />}
        {this.state.imageData &&
          this.state.arrayData.map(e => (
            <ImageGalleryItem
              key={e.id}
              onClick={this.showImg}
              largeImageURL={e.largeImageURL}
              webformatURL={e.webformatURL}
            />
          ))}
        <Button />
      </ul>
    );
  }
}
