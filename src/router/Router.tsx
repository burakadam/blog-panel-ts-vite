import { AuthRoutes } from './AuthRoutes';
import { ProtectedRoutes } from './ProtectedRoutes';

const Router = () => {
  const isAuth = true;

  return isAuth ? <ProtectedRoutes /> : <AuthRoutes />;
};

export { Router };
