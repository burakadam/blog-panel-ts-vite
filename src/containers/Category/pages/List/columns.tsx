import { ROUTES } from '@/constants/routes';
import { ICategory } from '@/models/category';
import { Button } from 'antd';

export const COLUMNS = [
  {
    dataIndex: 'name',
    title: 'Name',
  },
  {
    dataIndex: 'description',
    title: 'Description',
  },
  {
    render: (item: ICategory) => (
      <Button href={`${ROUTES.CATEGORY_UPDATE}/${item._id}`} key={item._id}>
        DETAIL
      </Button>
    ),
  },
];
