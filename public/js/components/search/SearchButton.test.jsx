import React from 'react';
import SearchButton from './SearchButton';

describe('#SearchButton component', () => {
  test('should render search button', () => {
    const wrapper = shallow(<SearchButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
