import React from 'react';
import Header from './Header';

describe('#Details Header component', () => {
  test('should render movie details header', () => {
    const movie = {
      poster_path: 'somepath',
      title: 'sometitle',
      vote_average: '9.5',
      release_date: '1970-01-01',
      runtime: '120',
      overview: 'some_overview',
    };

    const wrapper = shallow(<Header movie={movie} />);
    expect(wrapper).toMatchSnapshot();
  });
});
