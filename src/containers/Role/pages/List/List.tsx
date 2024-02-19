import { Title } from '@/components/Title';
import { ROUTES } from '@/constants/routes';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Spin, Table } from 'antd';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { roleListActions, roleListSelectors } from '.';
import { COLUMNS } from './columns';

const List = () => {
  const dispatch = useAppDispatch();
  const roleList = useAppSelector(roleListSelectors.roleList);
  const isLoading = useAppSelector(roleListSelectors.isLoading);

  useEffect(() => {
    dispatch(roleListActions.getRolesRequest());
  }, [dispatch]);

  return (
    <Spin spinning={isLoading}>
      <Title text='Role List'>
        <Link to={ROUTES.ROLE_CREATE} className='text-blue-400'>
          Create New Role
        </Link>
      </Title>
      <Table
        dataSource={roleList}
        columns={COLUMNS}
        pagination={false}
        rowKey='_id'
      />
    </Spin>
  );
};

export { List };
