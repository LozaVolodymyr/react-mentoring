import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import SearchControls from './SearchControls';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMode: 'title',
    };
    this.fetchMovies = this.fetchMovies.bind(this);
    this.setSearchMode = this.setSearchMode.bind(this);
  }

  setSearchMode(searchMode) {
    this.setState({
      searchMode,
    });
  }

  fetchMovies(data) {
    this.props.fetchMovies(data);
  }

  render() {
    return (
      <div className="search-header">
        <div className="layer">
          <h3>netflixroulette</h3>
          <SearchBar />
          <SearchControls
            mode={this.state.searchMode}
            fetchMovies={this.fetchMovies}
            setSearchMode={this.setSearchMode}
          />
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  fetchMovies: () => {},
};

Header.propTypes = {
  fetchMovies: PropTypes.func,
};

export default Header;
