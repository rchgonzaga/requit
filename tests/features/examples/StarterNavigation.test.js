import React from 'react';
import { shallow } from 'enzyme';
import { StarterNavigation } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<StarterNavigation />);
  expect(renderedComponent.find('.examples-starter-navigation').length).toBe(1);
});
