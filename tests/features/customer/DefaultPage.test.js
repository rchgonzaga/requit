import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/customer/DefaultPage';

describe('customer/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      customer: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.customer-default-page').length
    ).toBe(1);
  });
});
