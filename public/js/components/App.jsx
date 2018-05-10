import React from 'react';
import Search from './search/Search';
import Details from './details/Details';
import Content from './content/Content';
import Footer from './Footer';
import Helpers from './../helpers/helpers';

const SEARCH = 'search';
const DETAILS = 'details';

const movies = Helpers.getMoviesJSON();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mode: DETAILS,
      movie: {},
      movies,
    };

    this.viewMovieDetails = this.viewMovieDetails.bind(this);
  }

  viewMovieDetails(movie) {
    this.setState({
      mode: DETAILS,
      movie,
    });
  }

  render() {
    return (
      <div>
        <Search
          mode={this.state.mode}
        />
        <Details
          mode={this.state.mode}
          movie={this.state.movie}
        />
        <Content
          mode={this.state.mode}
          movies={this.state.movies}
          viewMovieDetails={this.viewMovieDetails}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
