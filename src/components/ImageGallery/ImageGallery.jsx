import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.scss';
import Button from '../Button/Button';

const ImageGallery = ({ images: { imgsArray }, onClickBtn }) => {
  return (
    <>
      <ul className="ImageGallery">
        {imgsArray.map(img => (
          <ImageGalleryItem image={img} />
        ))}
      </ul>
      {imgsArray.length > 11 && <Button onClickBtn={onClickBtn} />}
    </>
  );
};

ImageGallery.propTypes = {
  onClickBtn: PropTypes.func,
  images: PropTypes.shape({
    imgsArray: PropTypes.array,
  }),
};

export default ImageGallery;
