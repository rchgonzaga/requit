import {
  EXAMPLES_SHOW_OR_HIDE_SIDE_MENU,
} from '../../../../src/features/examples/redux/constants';

import {
  showOrHideSideMenu,
  reducer,
} from '../../../../src/features/examples/redux/showOrHideSideMenu';

describe('examples/redux/showOrHideSideMenu', () => {
  it('returns correct action by showOrHideSideMenu', () => {
    expect(showOrHideSideMenu()).toHaveProperty('type', EXAMPLES_SHOW_OR_HIDE_SIDE_MENU);
  });

  it('handles action type EXAMPLES_SHOW_OR_HIDE_SIDE_MENU correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: EXAMPLES_SHOW_OR_HIDE_SIDE_MENU }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
