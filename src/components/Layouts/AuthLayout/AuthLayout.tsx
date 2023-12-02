import { Outlet } from 'react-router-dom';

import LOGO from '@/assets/logo.svg';

const AuthLayout = () => {
  return (
    <div className='min-h-screen bg-stone-50 flex justify-center items-center'>
      <div className='mx-4'>
        <div>
          <img
            src={LOGO}
            alt='Company Logo'
            className='max-w-[50%] mx-auto mb-4'
          />
        </div>
        <div className='p-4 bg-white rounded-md border'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export { AuthLayout };
