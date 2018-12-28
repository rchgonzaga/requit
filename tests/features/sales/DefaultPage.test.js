import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/sales/DefaultPage';

describe('sales/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      sales: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.sales-default-page').length
    ).toBe(1);
  });
});
