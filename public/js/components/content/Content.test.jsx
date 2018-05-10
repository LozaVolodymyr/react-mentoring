import React from 'react';
import Content from './Content';

const mode = 'search';
const movies = new Array(2);
const viewMovieDetails = jest.fn();

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Content
    mode={mode}
    movies={movies}
    viewMovieDetails={viewMovieDetails}
  />);
});

describe('#Content component', () => {
  test('should render content container', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should display "not found" message when movies array is empty', () => {
    const emptyMovieArray = [];
    const notFoundText = 'No films found.';
    wrapper = shallow(<Content
      mode={mode}
      movies={emptyMovieArray}
      viewMovieDetails={viewMovieDetails}
    />);

    expect(wrapper.text()).toBe(notFoundText);
  });

  describe('#setSortType function', () => {
    test('should set sort type for content', () => {
      const sortType = 'someSortType';
      wrapper.instance().setSortType(sortType);
      expect(wrapper.state().sortType).toBe(sortType);
    });
  });

  describe('#viewMovieDetails function', () => {
    test('should call viewMovieDetails function from props with the same argument', () => {
      const movie = 'someMovie';
      wrapper.instance().viewMovieDetails(movie);
      expect(viewMovieDetails).toHaveBeenCalledWith(movie);
    });
  });
});
