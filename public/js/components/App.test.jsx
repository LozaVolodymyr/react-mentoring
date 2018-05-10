import React from 'react';
import App from './App';

describe('#App component', () => {
  test('should render app component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
