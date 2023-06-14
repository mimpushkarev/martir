import {lazy} from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    async lazy() {
      const ClientRoot = lazy(() => import('./client-root'));
      return {Component: ClientRoot};
    },
    children: [
      {
        index: true,
        async lazy() {
          const Home = lazy(() => import('./home'));
          return {Component: Home};
        }
      },
      {
        path: 'about',
        element: null
      },
      {
        path: 'policy-information',
        element: null
      },
      {
        path: 'legal-information',
        element: null
      },
      {
        path: 'faq',
        element: null
      },
      {
        path: 'contacts',
        element: null
      },
      {
        path: 'cart',
        element: null
      },
      {
        path: 'cart',
        element: null
      },
      {
        path: 'product/:product_id',
        element: null
      },
      {
        path: '*',
        async lazy() {
          const NotFound = lazy(() => import('./not-found'));
          return {Component: NotFound};
        }
      }
    ]
  },
  {
    path: '/admin',
    async lazy() {
      const AdminRoot = lazy(() => import('./admin-root'));
      return {Component: AdminRoot};
    },
    children: [
      {
        path: 'orders',
        async lazy() {
          return {Component: () => <h1>Заказы</h1>};
        }
      },
      {
        path: 'products',
        async lazy() {
          return {Component: () => <h1>Товары</h1>};
        }
      },
      {
        path: 'users',
        async lazy() {
          return {Component: () => <h1>Пользователи</h1>};
        }
      },
      {
        path: 'permissions',
        async lazy() {
          return {Component: () => <h1>Доступы</h1>};
        }
      },
      {
        path: '*',
        async lazy() {
          const NotFound = lazy(() => import('./not-found'));
          return {Component: NotFound};
        }
      }
    ]
  }
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
