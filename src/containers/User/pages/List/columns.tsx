import { ROUTES } from '@/constants/routes';
import { ICategory } from '@/models/category';
import { Button } from 'antd';

export const COLUMNS = [
  {
    dataIndex: 'fullName',
    title: 'Full Name',
  },
  {
    dataIndex: 'email',
    title: 'Email',
  },
  {
    dataIndex: 'createdAt',
    title: 'Create At',
  },
  {
    render: (item: ICategory) => (
      <Button href={`${ROUTES.USER_UPDAET}/${item._id}`} key={item._id}>
        DETAIL
      </Button>
    ),
  },
];
