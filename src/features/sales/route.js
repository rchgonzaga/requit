// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  SalesForm,
} from './';

export default {
  path: 'sales',
  name: 'Sales',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: 'sales-form', name: 'Sales form', component: SalesForm },
  ],
};
