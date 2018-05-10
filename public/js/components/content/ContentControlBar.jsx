import React from 'react';
import PropTypes from 'prop-types';

class ContentControlBar extends React.Component {
  constructor(props) {
    super(props);

    this.setSortType = this.setSortType.bind(this);
  }

  setSortType(sortType) {
    this.props.setSortType(sortType);
  }

  render() {
    if (this.props.mode === 'search') {
      return (
        <div className="content-control-bar">
          <p className="content-control"> {this.props.movieCount} movies found</p>
          <p
            className={`sort-control ${(this.props.sortType === 'rating') ? 'active' : ''}`}
          >
            rating
          </p>
          <p
            className={`sort-control ${(this.props.sortType === 'releaseDate') ? 'active' : ''}`}
          >
            release date
          </p>
          <p className="sort-control">Sort by</p>
        </div>
      );
    }
    return (
      <div className="content-control-bar">
        <p className="content-control"><strong>Films by</strong> Drama genre</p>
      </div>
    );
  }
}


ContentControlBar.defaultProps = {
  setSortType: () => {},
  mode: 'search',
  movieCount: 0,
  sortType: 'rating',
};

ContentControlBar.propTypes = {
  setSortType: PropTypes.func,
  mode: PropTypes.string,
  sortType: PropTypes.string,
  movieCount: PropTypes.number,
};

export default ContentControlBar;
