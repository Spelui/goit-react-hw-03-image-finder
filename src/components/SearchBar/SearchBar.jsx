import { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';

class SearchBar extends Component {
  state = {
    imgName: '',
  };

  imgToSearch = imgName => {
    this.setState({ imgName });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.imgName);
  };

  render() {
    const { imgToSearch, onFormSubmit, state } = this;
    return (
      <header className="searchbar">
        <form className="SearchForm" onSubmit={onFormSubmit}>
          <button type="submit" className="SearchForm-button">
            &#128269;
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={e => imgToSearch(e.target.value)}
            value={state.imgName}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

SearchBar.propsTypes = {
  onSubmit: PropTypes.func,
};

export default SearchBar;
