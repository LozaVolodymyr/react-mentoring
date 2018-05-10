import React from 'react';
import PropTypes from 'prop-types';
import DetailsHeader from './Header';
import Helpers from './../../helpers/helpers';

const movie = Helpers.getMoviesJSON()[0];

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie,
    };
  }

  render() {
    if (this.props.mode !== 'details') {
      return null;
    }
    return (
      <div>
        <DetailsHeader movie={this.state.movie} />
      </div>
    );
  }
}

Details.defaultProps = {
  mode: 'details',
};

Details.propTypes = {
  mode: PropTypes.string,
};

export default Details;
