import { ROUTES } from '@/constants/routes';
import { TBlogList } from '@/models/blog';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button, Modal, Spin, Table } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogListSelectors } from '.';
import { COLUMNS } from './columns';
import { blogListActions } from './slice';

const List = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(blogListSelectors.isLoading);
  const blogs = useAppSelector(blogListSelectors.blogList);
  const [selectedBlog, setSelectedBlog] = useState<TBlogList | null>(null);

  useEffect(() => {
    dispatch(blogListActions.getBlogsRequest({ page: 1, pageSize: 10 }));
  }, [dispatch]);

  const handleDelete = (item: TBlogList) => {
    setSelectedBlog(item);
  };

  const columns = COLUMNS(handleDelete);

  const handleOk = () => {
    if (selectedBlog?._id)
      dispatch(blogListActions.deleteBlogRequest({ _id: selectedBlog?._id }));

    setSelectedBlog(null);
  };

  const handleCancel = () => {
    setSelectedBlog(null);
  };

  return (
    <Spin spinning={isLoading}>
      <div className='flex justify-end mb-4'>
        <Link to={ROUTES.BLOG_CREATE} className='text-blue-400'>
          Create New Category
        </Link>
      </div>
      <Table
        dataSource={blogs}
        columns={columns}
        pagination={false}
        rowKey='_id'
      />
      <Modal
        title='Delete Blog'
        open={!!selectedBlog}
        footer={[
          <Button key='cancel' onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key='delete' onClick={handleOk} danger>
            Delete
          </Button>,
        ]}
      >
        <p>
          Are you sure to delete{' '}
          <span className='underline'>"{selectedBlog?.title}"</span>?
        </p>
      </Modal>
    </Spin>
  );
};

export { List };
