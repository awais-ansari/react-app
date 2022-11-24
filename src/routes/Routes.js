import Example from '../components/Example';
import Page from '../components/Page';

const ROUTES = [
  {
    path: '/app',
    key: 'APP',
    exact: true,
    component: Example,
  },
  {
    path: '/app/page',
    key: 'APP_PAGE',
    exact: true,
    component: Page,
  },
];

export default ROUTES;
