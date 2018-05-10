import React from 'react';
import MovieThumbnail from './MovieThumbnail';

describe('#MovieThumbnail component', () => {
  test('should render movie thumbnail', () => {
    const movie = {
      id: 12345,
      genres: ['genre1', 'genre2'],
      poster_path: 'somepath',
      title: 'sometitle',
      release_date: '1970-01-01',
    };

    const wrapper = shallow(<MovieThumbnail
      movie={movie}
      key={movie.id}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
