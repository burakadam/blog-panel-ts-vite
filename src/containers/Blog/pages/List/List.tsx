import { ROUTES } from '@/constants/routes';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Spin, Table } from 'antd';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogListSelectors } from '.';
import { COLUMNS } from './columns';
import { blogListActions } from './slice';

const List = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(blogListSelectors.isLoading);
  const blogs = useAppSelector(blogListSelectors.blogList);

  console.log('blogs', blogs);

  useEffect(() => {
    dispatch(blogListActions.getBlogsRequest({ page: 1, pageSize: 10 }));
  }, [dispatch]);

  if (isLoading) return <Spin spinning={isLoading} fullscreen />;

  return (
    <>
      <div className='flex justify-end mb-4'>
        <Link to={ROUTES.BLOG_CREATE} className='text-blue-400'>
          Create New Category
        </Link>
      </div>
      <Table
        dataSource={blogs}
        columns={COLUMNS}
        pagination={false}
        rowKey='_id'
      />
    </>
  );
};

export { List };
