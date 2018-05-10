import React from 'react';
import ContentControlBar from './ContentControlBar';

const mode = 'search';
const sortType = 'rating';
const movies = new Array(2);
const setSortType = jest.fn();


const wrapper = shallow(<ContentControlBar
  mode={mode}
  movieCount={movies.length}
  sortType={sortType}
  setSortType={setSortType}
/>);

describe('#ContentControlBar component', () => {
  test('should render content control bar', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('#setSortType function', () => {
    test('should call setSortType function from props with the same argument', () => {
      const type = 'someSortType';
      wrapper.instance().setSortType(type);
      expect(setSortType).toHaveBeenCalledWith(type);
    });
  });
});
