import React from 'react';
import Footer from './Footer';

describe('#Footer component', () => {
  test('should render footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
