import React from 'react';
import { shallow } from 'enzyme';
import { SearchResults } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SearchResults />);
  expect(renderedComponent.find('.examples-search-results').length).toBe(1);
});
