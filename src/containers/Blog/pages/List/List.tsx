import { ROUTES } from '@/constants/routes';
import { TBlogList } from '@/models/blog';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button, Modal, Spin, Table } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogListSelectors } from '.';
import { BlogFilter } from './List.filter';
import { COLUMNS } from './columns';
import { blogListActions } from './slice';

const List = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(blogListSelectors.isLoading);
  const blogs = useAppSelector(blogListSelectors.blogList);
  const activePage = useAppSelector(blogListSelectors.activePage);
  const pageSize = useAppSelector(blogListSelectors.pageSize);
  const totalCount = useAppSelector(blogListSelectors.totalCount);

  const [selectedBlog, setSelectedBlog] = useState<TBlogList | null>(null);

  useEffect(() => {
    dispatch(blogListActions.getBlogsRequest());
  }, [activePage, dispatch, pageSize]);

  const handlePageChange = (num: number) =>
    dispatch(blogListActions.setActivePage(num));

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
      <BlogFilter />
      <div className='flex justify-end mb-4'>
        <Link to={ROUTES.BLOG_CREATE} className='text-blue-400'>
          Create New Blog
        </Link>
      </div>
      <Table
        dataSource={blogs}
        columns={columns}
        rowKey='_id'
        pagination={{
          total: totalCount,
          pageSize: pageSize,
          current: activePage,
          onChange: handlePageChange,
          showTotal: (total) => `Total: ${total} `,
        }}
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
