import {
  DefaultPage,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'home',
      name: 'Default page',
      component: DefaultPage,
      isIndex: true,
    },
  ],
};
