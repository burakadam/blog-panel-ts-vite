import { ProtectedLayout } from '@/components/Layouts/ProtectedLayout';
import { ROUTES } from '@/constants/routes';
import { Create as BlogCreate } from '@/containers/Blog/pages/Create';
import { List as BlogList } from '@/containers/Blog/pages/List';
import { Update as BlogUpdate } from '@/containers/Blog/pages/Update';

import { Create as CategoryCreate } from '@/containers/Category/pages/Create';
import { List as CategoryList } from '@/containers/Category/pages/List';
import { Update as CategoryUpdate } from '@/containers/Category/pages/Update';

import { Create as RoleCreate } from '@/containers/Role/pages/Create';
import { List as RoleList } from '@/containers/Role/pages/List';
import { Update as RoleUpdate } from '@/containers/Role/pages/Update';

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
        // BLOG
        {
          path: ROUTES.BLOG_CREATE,
          element: <BlogCreate />,
        },
        {
          path: ROUTES.BLOG_LIST,
          element: <BlogList />,
        },
        {
          path: `${ROUTES.BLOG_UPDATE}/:blogId`,
          element: <BlogUpdate />,
        },
        // BLOG
        // CATEGORY
        {
          path: ROUTES.CATEGORY_LIST,
          element: <CategoryList />,
        },
        {
          path: ROUTES.CATEGORY_CREATE,
          element: <CategoryCreate />,
        },
        {
          path: `${ROUTES.CATEGORY_UPDATE}/:categoryId`,
          element: <CategoryUpdate />,
        },
        // CATEGORY
        //ROLE
        {
          path: ROUTES.ROLE_LIST,
          element: <RoleList />,
        },
        {
          path: ROUTES.ROLE_CREATE,
          element: <RoleCreate />,
        },
        {
          path: `${ROUTES.ROLE_UPDATE}/:roleId`,
          element: <RoleUpdate />,
        },
        //ROLE
      ],
    },
    { path: '*', element: <Navigate to={ROUTES.ROOT} replace /> },
  ]);

export { ProtectedRoutes };
