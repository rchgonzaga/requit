// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  EXAMPLES_SHOW_OR_HIDE_SIDE_MENU,
} from './constants';

export function showOrHideSideMenu() {
  return {
    type: EXAMPLES_SHOW_OR_HIDE_SIDE_MENU,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case EXAMPLES_SHOW_OR_HIDE_SIDE_MENU:
      return {
        ...state,
        sideMenuVisible: !state.sideMenuVisible,
      };

    default:
      return state;
  }
}
