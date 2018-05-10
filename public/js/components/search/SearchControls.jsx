import React from 'react';
import PropTypes from 'prop-types';
import Helpers from './../../helpers/helpers';

class SearchControlls extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.setSearchMode = this.setSearchMode.bind(this);
  }

  setSearchMode(mode) {
    this.props.setSearchMode(mode);
  }

  search() {
    this.props.fetchMovies(Helpers.getMoviesJSON());
  }

  render() {
    return (
      <div className="search-controls">
        <span>SEARCH BY</span>
        <button
          className={(this.props.mode === 'title') ? 'active' : ''}
          type="button"
          name="search-by-title"
          value="TITLE"
          onClick={() => this.setSearchMode('title')}
        >
          TITLE
        </button>

        <button
          className={(this.props.mode === 'genre') ? 'active' : ''}
          type="button"
          name="search-by-genre"
          value="GENRE"
          onClick={() => this.setSearchMode('genre')}
        >
          GENRE
        </button>

        <button
          className="active search"
          type="submit"
          value="SEARCH"
          onClick={this.search}
        >
          SEARCH
        </button>
      </div>
    );
  }
}

SearchControlls.defaultProps = {
  mode: 'title',
  fetchMovies: () => {},
  setSearchMode: () => {},
};

SearchControlls.propTypes = {
  mode: PropTypes.string,
  fetchMovies: PropTypes.func,
  setSearchMode: PropTypes.func,
};

export default SearchControlls;
