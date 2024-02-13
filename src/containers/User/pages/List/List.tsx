import { ROUTES } from '@/constants/routes';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Spin, Table } from 'antd';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COLUMNS } from './columns';
import { userListSelectors } from './selectors';
import { userListActions } from './slice';

//FILTERS AND PAGINATION

const List = () => {
  const dispatch = useAppDispatch();
  const userList = useAppSelector(userListSelectors.userList);
  const isLoading = useAppSelector(userListSelectors.isLoading);

  useEffect(() => {
    dispatch(userListActions.getUsersRequest());
  }, [dispatch]);

  return (
    <Spin spinning={isLoading}>
      <div className='flex justify-end mb-4'>
        <Link to={ROUTES.USER_CREATE} className='text-blue-400'>
          Create New User
        </Link>
      </div>
      <Table
        dataSource={userList}
        columns={COLUMNS}
        pagination={false}
        rowKey='_id'
      />
    </Spin>
  );
};

export { List };
