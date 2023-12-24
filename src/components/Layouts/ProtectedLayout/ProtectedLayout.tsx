import { Link, Outlet } from 'react-router-dom';

import LOGO from '@/assets/logo.svg';
import { ROUTES } from '@/constants/routes';
import { authActions, authSelectors } from '@/store/auth';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button, Layout, Spin } from 'antd';
import { useEffect } from 'react';
import { Menu } from './components/Menu';

const ProtectedLayout = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(authSelectors.loadingUserData);

  const handleLogout = () => dispatch(authActions.logout());

  useEffect(() => {
    dispatch(authActions.getUserDataRequest());
  }, []);

  return (
    <Spin spinning={loading}>
      <Layout className='min-h-screen'>
        <Menu />
        <Layout>
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
        </Layout>
      </Layout>
    </Spin>
  );
};

export { ProtectedLayout };
