import React from 'react';
import Details from './Details';

describe('#Details component', () => {
  test('should render movie details component if view mode is "details"', () => {
    const mode = 'details';

    const wrapper = shallow(<Details mode={mode} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should not render movie details component if view mode is NOT "details"', () => {
    const mode = 'search';

    const wrapper = shallow(<Details mode={mode} />);

    expect(wrapper.html()).toBe(null);
  });
});
