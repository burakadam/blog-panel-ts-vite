import { authSelectors } from '@/store/auth';
import { useAppSelector } from '@/store/hooks';
import { AuthRoutes } from './AuthRoutes';
import { ProtectedRoutes } from './ProtectedRoutes';

const Router = () => {
  const isAuth = useAppSelector(authSelectors.userToken);

  return isAuth ? <ProtectedRoutes /> : <AuthRoutes />;
};

export { Router };
