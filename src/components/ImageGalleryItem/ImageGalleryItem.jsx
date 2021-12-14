import { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.scss';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
    modalImg: '',
    alt: '',
  };

  onClickImg = (largeImg, alt) => {
    this.setState({ isOpen: !this.state.isOpen, modalImg: largeImg, alt });
  };

  onCloseModal = () => {
    this.setState({ isOpen: false, modalImg: '', alt: '' });
  };

  render() {
    const image = this.props.image;
    const { state, onCloseModal } = this;
    return (
      <>
        <li
          className="ImageGalleryItem"
          key={image.id}
          onClick={e => this.onClickImg(image.largeImageURL, image.tags)}
        >
          <img
            className="ImageGalleryItem-image"
            src={image.webformatURL}
            alt={image.tags}
          />
        </li>
        {this.state.isOpen && (
          <Modal img={state.modalImg} alt={state.alt} onClose={onCloseModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
};

export default ImageGalleryItem;
