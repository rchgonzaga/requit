import React from 'react';
import { shallow } from 'enzyme';
import { AccountDropdownMenu } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<AccountDropdownMenu />);
  expect(renderedComponent.find('.examples-account-dropdown-menu').length).toBe(1);
});
