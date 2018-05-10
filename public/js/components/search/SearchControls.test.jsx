import React from 'react';
import SearchControls from './SearchControls';

describe('#SearchControls component', () => {
  test('should render search controls', () => {
    const wrapper = shallow(<SearchControls />);
    expect(wrapper).toMatchSnapshot();
  });
});
