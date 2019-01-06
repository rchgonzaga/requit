import React from 'react';
import { shallow } from 'enzyme';
import { SearchDrawer } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SearchDrawer />);
  expect(renderedComponent.find('.examples-search-drawer').length).toBe(1);
});
