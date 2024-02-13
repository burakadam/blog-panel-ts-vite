import { ROUTES } from '@/constants/routes';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';

const List = () => {
  return (
    <Spin spinning={false}>
      <div className='flex justify-end mb-4'>
        <Link to={ROUTES.USER_CREATE} className='text-blue-400'>
          Create New User
        </Link>
      </div>
      <div>List</div>
    </Spin>
  );
};

export { List };
