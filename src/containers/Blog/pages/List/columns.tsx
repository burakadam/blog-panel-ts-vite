import { ROUTES } from '@/constants/routes';
import { TBlogList } from '@/models/blog';
import { Button } from 'antd';

export const COLUMNS = [
  {
    dataIndex: 'title',
    title: 'Title',
  },
  {
    dataIndex: 'category',
    title: 'Category',
    render: (e: { name: string }) => e.name,
  },
  {
    dataIndex: 'viewCount',
    title: 'View Count',
  },
  {
    dataIndex: 'createdAt',
    title: 'Created At',
  },
  {
    dataIndex: 'updatedAt',
    title: 'Updated At',
  },
  {
    render: (e: TBlogList) => (
      <Button href={`${ROUTES.CATEGORY_UPDATE}/${e._id}`}>Detail</Button>
    ),
  },
];
