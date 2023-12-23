import { ROUTES } from '@/constants/routes';
import { ICategory } from '@/models/category';
import { Link } from 'react-router-dom';

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
      <Link to={`${ROUTES.CATEGORY_UPDATE}/${item._id}`} key={item._id}>
        DETAIL
      </Link>
    ),
  },
];
