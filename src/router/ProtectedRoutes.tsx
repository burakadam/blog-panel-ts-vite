import { ProtectedLayout } from '@/components/Layouts/ProtectedLayout';
import { ROUTES } from '@/constants/routes';
import { Create as BlogCreate } from '@/containers/Blog/pages/Create';
import { Create as CategoryCreate } from '@/containers/Category/pages/Create';
import { List as CategoryList } from '@/containers/Category/pages/List';

import { Home } from '@/containers/Home';
import { Navigate, useRoutes } from 'react-router-dom';

const ProtectedRoutes = () =>
  useRoutes([
    {
      element: <ProtectedLayout />,
      children: [
        {
          path: ROUTES.ROOT,
          element: <Home />,
        },
        {
          path: ROUTES.BLOG_CREATE,
          element: <BlogCreate />,
        },
        {
          path: ROUTES.CATEGORY_LIST,
          element: <CategoryList />,
        },
        {
          path: ROUTES.CATEGORY_CREATE,
          element: <CategoryCreate />,
        },
      ],
    },
    { path: '*', element: <Navigate to={ROUTES.ROOT} replace /> },
  ]);

export { ProtectedRoutes };
