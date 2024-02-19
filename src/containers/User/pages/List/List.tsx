import { Title } from '@/components/Title';
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

  const handleToogleActivation = (id: string, isActive: boolean) => {
    console.log(id, isActive);
    dispatch(userListActions.toggleUserActiveStatusRequest({ id, isActive }));
  };

  useEffect(() => {
    dispatch(userListActions.getUsersRequest());
  }, [dispatch]);

  return (
    <Spin spinning={isLoading}>
      <Title text='User List'>
        <Link to={ROUTES.USER_CREATE} className='text-blue-400'>
          Create New User
        </Link>
      </Title>
      <Table
        dataSource={userList}
        columns={COLUMNS(handleToogleActivation)}
        pagination={false}
        rowKey='_id'
      />
    </Spin>
  );
};

export { List };
