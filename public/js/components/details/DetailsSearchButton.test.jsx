import React from 'react';
import DetailsSearchButton from './DetailsSearchButton';

describe('#DetailsSearchButton component', () => {
  test('should render search button in details header', () => {
    const wrapper = shallow(<DetailsSearchButton />);

    expect(wrapper).toMatchSnapshot();
  });
});
