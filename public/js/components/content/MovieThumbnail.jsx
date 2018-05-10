import React from 'react';

function MovieThumbnail(props) {
  const genres = props.movie.genres.join(' & ');
  const year = props.movie.release_date.split('-')[0];
  return (
    <div className="thumbnail">
      <img src={props.movie.poster_path} alt="" />
      <div>
        <div className="year">{year}</div>
        <p>{props.movie.title}</p>
        <p className="genre">{genres}</p>
      </div>
    </div>
  );
}

export default MovieThumbnail;
