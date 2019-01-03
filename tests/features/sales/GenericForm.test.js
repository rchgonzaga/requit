import React from 'react';
import { shallow } from 'enzyme';
import { GenericForm } from '../../../src/features/sales/GenericForm';

describe('sales/GenericForm', () => {
  it('renders node with correct class name', () => {
    const props = {
      sales: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <GenericForm {...props} />
    );

    expect(
      renderedComponent.find('.sales-generic-form').length
    ).toBe(1);
  });
});
