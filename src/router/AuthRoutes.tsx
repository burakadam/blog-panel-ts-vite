import { Navigate, useRoutes } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { Login } from '../containers/Auth/Login';

const AuthRoutes = () =>
  useRoutes([
    {
      path: ROUTES.LOGIN,
      element: <Login />,
    },
    { path: '*', element: <Navigate to={ROUTES.LOGIN} replace /> },
  ]);

export { AuthRoutes };
