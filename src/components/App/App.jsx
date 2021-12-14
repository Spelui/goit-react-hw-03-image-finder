import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import getImg from '../../services/api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const loaderStyle = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

class App extends Component {
  state = {
    page: 1,
    imgsArray: [],
    searchImg: '',
    loader: false,
    largeImg: '',
    altImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchImg, page } = this.state;
    if (prevState.searchImg !== searchImg || prevState.page !== page) {
      this.getSearchImg();
    }
  }

  fetchNextPageImg = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  getSearchImg = async () => {
    const { searchImg, page } = this.state;
    this.setState({ loader: true });
    try {
      const imgs = await getImg(searchImg, page);

      if (!imgs.totalHits) {
        return toast.error('Please write valid value');
      }

      this.setState(prevState => ({
        imgsArray: [...prevState.imgsArray, ...imgs.hits],
      }));

      if (this.state.imgsArray.length && this.state.page === 1) {
        toast.success(`We found ${imgs.totalHits} images`);
      }

      return imgs.hits;
    } catch (error) {
      toast.error(`${error.message}`);
    } finally {
      this.setState({ loader: false });
    }
  };

  onSearchSubmit = searchImg => {
    this.setState({ searchImg, imgsArray: [], page: 1 });
  };

  onCloseModal = () => {
    this.setState({ largeImg: '', altImage: '' });
  };

  onClickImage = e => {
    if (e.currentTarget === e.target) return;
    const largeImg = e.target.dataset.large;
    const altImage = e.target.alt;
    this.setState({ largeImg, altImage });
  };

  render() {
    const { onSearchSubmit, fetchNextPageImg, onClickImage } = this;
    const { imgsArray, loader, largeImg, altImage } = this.state;
    return (
      <>
        <SearchBar onSubmit={onSearchSubmit} />
        <main>
          {loader && (
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={80}
              width={80}
              style={{ ...loaderStyle }}
              timeout={1000}
            />
          )}

          <ImageGallery>
            {imgsArray.map(img => (
              <ImageGalleryItem image={img} onClick={onClickImage} />
            ))}
          </ImageGallery>

          {imgsArray.length > 11 && <Button onClickBtn={fetchNextPageImg} />}

          <ToastContainer />
        </main>

        {largeImg && (
          <Modal
            onClose={this.onCloseModal}
            largeImg={largeImg}
            alt={altImage}
          />
        )}
      </>
    );
  }
}

export default App;
