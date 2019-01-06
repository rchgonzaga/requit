import React from 'react';
import { shallow } from 'enzyme';
import { CreateDrawer } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<CreateDrawer />);
  expect(renderedComponent.find('.examples-create-drawer').length).toBe(1);
});
