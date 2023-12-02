import { AuthRoutes } from './AuthRoutes';
import { ProtectedRoutes } from './ProtectedRoutes';

const Router = () => {
  const isAuth = false;

  return isAuth ? <ProtectedRoutes /> : <AuthRoutes />;
};

export { Router };
