import React from 'react';
import Header from './Header';

describe('#Search Header component', () => {
  test('should render search header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
