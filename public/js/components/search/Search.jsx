import React from 'react';
import PropTypes from 'prop-types';
import SearchHeader from './Header';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    this.fetchMovies = this.fetchMovies.bind(this);
    this.viewMovieDetails = this.viewMovieDetails.bind(this);
  }

  fetchMovies(data) {
    this.setState({
      movies: data,
    });
  }

  viewMovieDetails(movie) {
    this.props.viewMovieDetails(movie);
  }

  render() {
    if (this.props.mode === 'details') {
      return null;
    }
    return (
      <div>
        <SearchHeader fetchMovies={this.fetchMovies} />
      </div>
    );
  }
}

Search.defaultProps = {
  mode: 'search',
  viewMovieDetails: () => {},
};

Search.propTypes = {
  mode: PropTypes.string,
  viewMovieDetails: PropTypes.func,
};

export default Search;
