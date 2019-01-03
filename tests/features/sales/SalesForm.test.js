import React from 'react';
import { shallow } from 'enzyme';
import { SalesForm } from '../../../src/features/sales/SalesForm';

describe('sales/SalesForm', () => {
  it('renders node with correct class name', () => {
    const props = {
      sales: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SalesForm {...props} />
    );

    expect(
      renderedComponent.find('.sales-sales-form').length
    ).toBe(1);
  });
});
