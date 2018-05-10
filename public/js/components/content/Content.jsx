import React from 'react';
import PropTypes from 'prop-types';
import ContentControlBar from './ContentControlBar';
import MovieThumbnail from './MovieThumbnail';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: 'rating',
    };

    this.viewMovieDetails = this.viewMovieDetails.bind(this);
  }

  setSortType(sortType) {
    this.setState({
      sortType,
    });
  }

  viewMovieDetails(movie) {
    this.props.viewMovieDetails(movie);
  }

  render() {
    if (this.props.movies.length === 0) {
      return (
        <div className="search-content">
          <p className="not-found">No films found.</p>
        </div>
      );
    }

    const movieList = this.props.movies.map(movie =>
      (<MovieThumbnail
        movie={movie}
        key={movie.id}
      />));

    return (
      <React.Fragment>
        <ContentControlBar
          mode={this.props.mode}
          movieCount={this.props.movies.length}
          sortType={this.state.sortType}
          setSortType={this.setSortType}
        />
        <div className="search-content">
          { movieList }
        </div>
      </React.Fragment>
    );
  }
}

Content.defaultProps = {
  mode: 'search',
  movies: [],
  viewMovieDetails: () => {},
};

Content.propTypes = {
  mode: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.object),
  viewMovieDetails: PropTypes.func,
};

export default Content;
