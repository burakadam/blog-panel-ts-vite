import { AuthLayout } from '@/components/Layouts/AuthLayout';
import { ROUTES } from '@/constants/routes';
import { Login } from '@/containers/Auth/Login';
import { Navigate, useRoutes } from 'react-router-dom';

const AuthRoutes = () =>
  useRoutes([
    {
      element: <AuthLayout />,
      children: [
        {
          path: ROUTES.LOGIN,
          element: <Login />,
        },
      ],
    },
    { path: '*', element: <Navigate to={ROUTES.LOGIN} replace /> },
  ]);

export { AuthRoutes };
