import { Router } from '@vaadin/router';

import './views/main-view';

/**
 * Defines the App routes
 * @param {object} HTML node to host components 
 */
export const initRouter = (node) => {
  const router = new Router(node);

  router.setRoutes([
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: 'main-view',
    },
    {
      path: '/about',
      component: 'about-view',
      action: () =>
        import('./views/about-view.js'),
    },
    {
      path: '(.*)',
      component: 'view-404',
      action: () =>
        import('./views/view-404.js'),
    },
  ]);
};
