import { Link, Outlet } from 'react-router-dom';

import LOGO from '@/assets/logo.svg';
import { ROUTES } from '@/constants/routes';
import { authActions } from '@/store/auth';
import { useAppDispatch } from '@/store/hooks';
import { Button } from 'antd';

const ProtectedLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => dispatch(authActions.logout());

  return (
    <div>
      <header className='h-16 border-b flex justify-between items-center px-4'>
        <Link to={ROUTES.ROOT} className='inline-block'>
          <img src={LOGO} alt='Company Logo' className='w-24' />
        </Link>
        <Button danger onClick={handleLogout}>
          Logout
        </Button>
      </header>
      <div className='min-h-screen p-4'>
        <Outlet />
      </div>
      <footer className='border-t p-4 text-center'>footer</footer>
    </div>
  );
};

export { ProtectedLayout };
