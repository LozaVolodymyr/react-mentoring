import React from 'react';
import PropTypes from 'prop-types';
import DetailsSearchButton from './DetailsSearchButton';

function Header(props) {
  const year = props.movie.release_date.split('-')[0];

  return (
    <div className="movie-details">
      <div className="layer">
        <div className="title clearfix">
          <h3>netflixroulette</h3>
          <DetailsSearchButton />
        </div>
        <div className="poster">
          <img src={props.movie.poster_path} alt="" />
        </div>
        <div className="info">
          <div className="clearfix">
            <h1>{props.movie.title}</h1>
            <div className="rating">
              {props.movie.vote_average}
            </div>
          </div>
          <div className="datetime">
            <span>{year}</span><span>{props.movie.runtime} min</span>
          </div>
        </div>
        <div className="description">
          {props.movie.overview}
        </div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  movie: {},
};

Header.propTypes = {
  movie: PropTypes.shape({
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    runtime: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    overview: PropTypes.string,
  }),
};


export default Header;
