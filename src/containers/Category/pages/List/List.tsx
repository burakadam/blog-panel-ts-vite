import { ROUTES } from '@/constants/routes';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Spin, Table } from 'antd';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categoryListActions, categoryListSelectors } from '.';
import { COLUMNS } from './columns';

const List = () => {
  const dispatch = useAppDispatch();
  const categoryList = useAppSelector(categoryListSelectors.categoryList);
  const isLoading = useAppSelector(categoryListSelectors.isLoading);

  useEffect(() => {
    dispatch(categoryListActions.getCategoriesRequest());
  }, [dispatch]);

  return (
    <Spin spinning={isLoading} fullscreen>
      <div className='flex justify-end mb-4'>
        <Link to={ROUTES.CATEGORY_CREATE} className='text-blue-400'>
          Create New Category
        </Link>
      </div>
      <Table
        dataSource={categoryList}
        columns={COLUMNS}
        pagination={false}
        rowKey='_id'
      />
    </Spin>
  );
};

export { List };
