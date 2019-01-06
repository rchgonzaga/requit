import React from 'react';
import { shallow } from 'enzyme';
import { HelpDropdownMenu } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<HelpDropdownMenu />);
  expect(renderedComponent.find('.examples-help-dropdown-menu').length).toBe(1);
});
