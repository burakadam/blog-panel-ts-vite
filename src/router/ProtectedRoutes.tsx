import { ROUTES } from '@/constants/routes';
import { Home } from '@/containers/Home';
import { Navigate, useRoutes } from 'react-router-dom';

const ProtectedRoutes = () =>
  useRoutes([
    {
      path: ROUTES.ROOT,
      element: <Home />,
    },
    { path: '*', element: <Navigate to={ROUTES.ROOT} replace /> },
  ]);

export { ProtectedRoutes };
