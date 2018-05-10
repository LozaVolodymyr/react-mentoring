import React from 'react';
import Search from './Search';

describe('#Search component', () => {
  test('should render search container', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });
});
