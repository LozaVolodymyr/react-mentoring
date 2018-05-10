import React from 'react';
import SearchBar from './SearchBar';

describe('#SearchBar component', () => {
  test('should search bar', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
